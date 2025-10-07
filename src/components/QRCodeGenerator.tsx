import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QrCode, Download, Share2, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { students } from '@/data/students';
import QRCode from 'qrcode';

interface QRGeneratorProps {
  courseId?: string;
  sessionId?: string;
  onGenerate?: (qrData: string) => void;
}

const QRCodeGenerator = ({ courseId, sessionId, onGenerate }: QRGeneratorProps) => {
  const [studentId, setStudentId] = useState('');
  const [expiryMinutes, setExpiryMinutes] = useState('10');
  const [maxUses, setMaxUses] = useState('single');
  const [locationLock, setLocationLock] = useState(false);
  const [geofenceRadius, setGeofenceRadius] = useState('50');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [qrPayload, setQrPayload] = useState('');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  // Generate QR code on canvas
  const generateQRCode = async (data: string) => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      await QRCode.toCanvas(canvas, data, {
        width: 256,
        margin: 2,
        color: {
          dark: '#0F172A',
          light: '#FFFFFF',
        },
      });

      // Also generate data URL for download
      const dataUrl = await QRCode.toDataURL(data, {
        width: 512,
        margin: 2,
      });
      setQrDataUrl(dataUrl);
    } catch (error) {
      console.error('QR generation error:', error);
      toast({
        title: "Generation Failed",
        description: "Could not generate QR code. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleGenerate = async () => {
    // Verify student ID exists
    const student = students.find(s => s.id === studentId);
    
    if (!student) {
      toast({
        title: "Invalid Student ID",
        description: "Please enter a valid student ID.",
        variant: "destructive",
      });
      return;
    }

    // Create signed payload (in production, this would be done server-side)
    const now = Date.now();
    const expiry = now + (parseInt(expiryMinutes) * 60 * 1000);
    const nonce = Math.random().toString(36).substring(2, 15);
    
    const payload = {
      studentId,
      courseId: courseId || 'COMP101',
      sessionId: sessionId || `session-${now}`,
      exp: expiry,
      nonce,
      issuedAt: now,
      maxUses: maxUses === 'single' ? 1 : 999,
      location: locationLock,
      geofenceRadius: parseInt(geofenceRadius),
    };

    // In production, send to POST /api/qrcode/generate
    // For demo, we'll create a mock signed token
    const mockSignedPayload = btoa(JSON.stringify(payload));
    
    setQrPayload(mockSignedPayload);
    await generateQRCode(mockSignedPayload);
    
    if (onGenerate) {
      onGenerate(mockSignedPayload);
    }
    
    toast({
      title: "QR Code Generated ✓",
      description: `Valid for ${expiryMinutes} minutes for ${student.fullName}`,
    });
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    
    const link = document.createElement('a');
    link.download = `attendance-qr-${Date.now()}.png`;
    link.href = qrDataUrl;
    link.click();
    
    toast({
      title: "QR Code Downloaded",
      description: "The QR code has been saved to your device.",
    });
  };

  const handleCopy = async () => {
    if (!qrPayload) return;
    
    try {
      await navigator.clipboard.writeText(qrPayload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Copied to Clipboard",
        description: "QR payload copied successfully.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (!qrDataUrl) return;
    
    try {
      // Convert data URL to blob
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'attendance-qr.png', { type: 'image/png' });
      
      if (navigator.share) {
        await navigator.share({
          title: 'Attendance QR Code',
          text: 'Scan this QR code to mark your attendance',
          files: [file],
        });
      } else {
        // Fallback: download
        handleDownload();
      }
    } catch (error) {
      console.error('Share error:', error);
    }
  };

  return (
    <div className="p-6 border border-border rounded-lg bg-card shadow-lg max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-foreground">Generate Attendance QR Code</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="student-id">Student ID</Label>
            <Input
              id="student-id"
              placeholder="Enter student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Time (minutes)</Label>
            <Select value={expiryMinutes} onValueChange={setExpiryMinutes}>
              <SelectTrigger id="expiry">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 minutes</SelectItem>
                <SelectItem value="10">10 minutes</SelectItem>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="max-uses">Usage Limit</Label>
            <Select value={maxUses} onValueChange={setMaxUses}>
              <SelectTrigger id="max-uses">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Use</SelectItem>
                <SelectItem value="multi">Multiple Uses</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="geofence">Geofence Radius (meters)</Label>
            <Input
              id="geofence"
              type="number"
              placeholder="50"
              value={geofenceRadius}
              onChange={(e) => setGeofenceRadius(e.target.value)}
              disabled={!locationLock}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="location-lock"
            checked={locationLock}
            onChange={(e) => setLocationLock(e.target.checked)}
            className="rounded border-input"
          />
          <Label htmlFor="location-lock" className="cursor-pointer">
            Enable Location Lock (requires students to be within geofence)
          </Label>
        </div>
        
        <Button 
          onClick={handleGenerate} 
          className="w-full"
        >
          <QrCode className="mr-2 h-4 w-4" />
          Generate QR Code
        </Button>
      </div>
      
      {qrPayload && (
        <div className="mt-6 space-y-4">
          <div className="flex flex-col items-center p-4 bg-background rounded-lg border border-border">
            <canvas 
              ref={canvasRef}
              className="rounded-lg shadow-md"
            />
            <p className="mt-3 text-sm text-muted-foreground text-center">
              Scan this QR code to mark attendance
              <br />
              <span className="text-xs">Expires in {expiryMinutes} minutes</span>
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button 
              variant="outline" 
              onClick={handleDownload}
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleShare}
              className="w-full"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleCopy}
              className="w-full"
            >
              {copied ? (
                <Check className="mr-2 h-4 w-4" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
