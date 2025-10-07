import React, { useState, useEffect, useRef } from 'react';
import { ScanLine, Camera, Upload, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import jsQR from 'jsqr';

interface QRCodeScannerProps {
  onScan?: (data: { 
    studentId: string; 
    location: { lat: number; lng: number };
    payload: string;
  }) => void;
}

const QRCodeScanner = ({ onScan }: QRCodeScannerProps) => {
  const [scanning, setScanning] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [manualCode, setManualCode] = useState('');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const animationFrameRef = useRef<number>();
  const { toast } = useToast();

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            title: "Location Error",
            description: "Could not get your location. Please enable location services.",
            variant: "destructive",
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  }, [toast]);

  // Cleanup function for camera stream
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setScanning(false);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stream]);

  // Scan QR code from video frame
  const scanFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas || !scanning) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      
      if (code) {
        processQRCode(code.data);
        stopCamera();
        return;
      }
    }
    
    animationFrameRef.current = requestAnimationFrame(scanFrame);
  };

  // Process scanned QR code
  const processQRCode = async (qrData: string) => {
    if (!location) {
      toast({
        title: "Location Required",
        description: "We need your location to verify attendance.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Decode the payload
      const payload = JSON.parse(atob(qrData));
      
      // Validate expiry
      if (Date.now() > payload.exp) {
        toast({
          title: "QR Code Expired",
          description: "This QR code has expired. Ask your lecturer to generate a new one.",
          variant: "destructive",
        });
        return;
      }

      // In production, send to POST /api/attendance/scan
      // Server validates HMAC, nonce, maxUses, and records attendance
      
      // Mock validation success
      if (onScan) {
        onScan({
          studentId: payload.studentId,
          location: location,
          payload: qrData,
        });
      }
      
      toast({
        title: "Attendance Recorded ✓",
        description: `You're marked present for ${payload.courseId}`,
      });
    } catch (error) {
      console.error('QR validation error:', error);
      toast({
        title: "Invalid QR Code",
        description: "This QR code is invalid or corrupted.",
        variant: "destructive",
      });
    }
  };

  // Start camera scanning
  const startScanning = async () => {
    if (!location) {
      toast({
        title: "Location Required",
        description: "We need your location to mark attendance. Please enable location services.",
        variant: "destructive",
      });
      return;
    }

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Use back camera on mobile
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }

      setStream(mediaStream);
      setScanning(true);
      
      // Start scanning loop
      setTimeout(() => {
        scanFrame();
      }, 500);
      
      toast({
        title: "Camera Started",
        description: "Point your camera at the QR code",
      });
    } catch (error) {
      console.error('Camera error:', error);
      toast({
        title: "Camera Access Denied",
        description: "Please allow camera access to scan QR codes.",
        variant: "destructive",
      });
    }
  };

  // Upload QR from file
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          processQRCode(code.data);
        } else {
          toast({
            title: "No QR Code Found",
            description: "Could not detect a QR code in this image.",
            variant: "destructive",
          });
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Manual code entry
  const handleManualSubmit = () => {
    if (!manualCode.trim()) {
      toast({
        title: "Code Required",
        description: "Please enter a valid code.",
        variant: "destructive",
      });
      return;
    }

    processQRCode(manualCode);
    setManualCode('');
  };

  return (
    <div className="flex flex-col items-center p-6 border border-border rounded-lg bg-card shadow-lg max-w-2xl mx-auto">
      <div className={`relative w-full ${scanning ? 'animate-pulse' : ''}`}>
        <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-lg overflow-hidden relative">
          {scanning ? (
            <>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border-2 border-primary rounded-lg shadow-lg">
                  <ScanLine className="absolute inset-0 w-full h-8 text-primary animate-scanning" />
                </div>
              </div>
            </>
          ) : (
            <Camera className="w-24 h-24 text-muted-foreground" />
          )}
        </div>
        <canvas ref={canvasRef} className="hidden" />
      </div>
      
      <div className="mt-6 w-full text-center space-y-4">
        <h3 className="text-lg font-semibold">
          {scanning ? "Scanning..." : "Scan QR Code"}
        </h3>
        <p className="text-sm text-muted-foreground">
          {scanning 
            ? "Hold your camera steady and point at the QR code" 
            : "Start scanning to mark your attendance"}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={scanning ? stopCamera : startScanning}
            disabled={!location}
            className="flex-1"
            variant={scanning ? "destructive" : "default"}
          >
            {scanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Stop Scanning
              </>
            ) : (
              <>
                <Camera className="mr-2 h-4 w-4" />
                Start Camera
              </>
            )}
          </Button>
          
          <Button 
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="flex-1"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload QR
          </Button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        <div className="pt-4 border-t border-border">
          <Label htmlFor="manual-code" className="text-sm text-muted-foreground">
            Or enter code manually
          </Label>
          <div className="flex gap-2 mt-2">
            <Input
              id="manual-code"
              placeholder="Paste or enter QR code"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleManualSubmit()}
            />
            <Button onClick={handleManualSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
      
      {location && (
        <div className="mt-4 flex items-center text-xs text-muted-foreground">
          <MapPin className="mr-1 h-3 w-3" />
          Location: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
