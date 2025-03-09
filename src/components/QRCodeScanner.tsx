
import React, { useState, useEffect } from 'react';
import { QrScanner } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface QRCodeScannerProps {
  onScan?: (data: { studentId: string; location: { lat: number; lng: number } }) => void;
}

const QRCodeScanner = ({ onScan }: QRCodeScannerProps) => {
  const [scanning, setScanning] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
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
        }
      );
    } else {
      toast({
        title: "Location Not Supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const startScanning = () => {
    if (!location) {
      toast({
        title: "Location Required",
        description: "We need your location to mark attendance. Please enable location services.",
        variant: "destructive",
      });
      return;
    }

    setScanning(true);
    
    // This is a mock implementation. In a real app, you would use a QR scanner library
    // For demo purposes, we'll simulate a successful scan after 3 seconds
    setTimeout(() => {
      const mockStudentId = "10316444"; // This would come from the actual QR code scan
      
      if (onScan) {
        onScan({
          studentId: mockStudentId,
          location: location
        });
      }
      
      toast({
        title: "QR Code Scanned",
        description: "Your attendance has been recorded successfully!",
      });
      
      setScanning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg bg-white shadow-md">
      <div className={`relative ${scanning ? 'animate-pulse' : ''}`}>
        <div className="w-64 h-64 bg-gray-100 flex items-center justify-center rounded-lg">
          {scanning ? (
            <div className="relative">
              <QrScanner className="w-24 h-24 text-upsa-blue opacity-50" />
              <div className="absolute inset-0 w-full h-full border-2 border-upsa-blue rounded animate-scan"></div>
            </div>
          ) : (
            <QrScanner className="w-24 h-24 text-upsa-blue" />
          )}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold mb-2">
          {scanning ? "Scanning..." : "Scan QR Code"}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          {scanning 
            ? "Please hold still..." 
            : "Click the button below to scan a QR code for attendance"}
        </p>
        
        <Button 
          onClick={startScanning} 
          disabled={scanning || !location}
          className="bg-upsa-blue"
        >
          {scanning ? "Scanning..." : "Start Scanning"}
        </Button>
      </div>
      
      {location && (
        <div className="mt-4 text-xs text-gray-500">
          Location: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
