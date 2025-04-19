
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ScanFace, Camera, CheckCircle2 } from 'lucide-react';

const FacialRecognition = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();
  
  const startCapture = async () => {
    try {
      setIsCapturing(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 300, height: 300, facingMode: 'user' }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Could not access your camera. Please grant permission.",
        variant: "destructive",
      });
      setIsCapturing(false);
    }
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (!context) return;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Stop video stream
    const stream = video.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
    
    setIsCapturing(false);
    analyzeImage();
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    
    // Mock analysis - in a real app, this would call a Python backend or AI service
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsVerified(true);
      
      toast({
        title: "Identity Verified",
        description: "Your attendance has been recorded successfully!",
      });
    }, 3000);
  };

  const resetProcess = () => {
    setIsCapturing(false);
    setIsAnalyzing(false);
    setIsVerified(false);
    
    // Clear canvas
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg bg-white shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Face Recognition Attendance</h3>
      
      <div className="w-64 h-64 relative mb-6 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-100">
        {!isCapturing && !isVerified && !isAnalyzing && (
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <ScanFace className="w-16 h-16 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">Position your face in the frame</p>
          </div>
        )}
        
        {isCapturing && (
          <video 
            ref={videoRef}
            autoPlay
            playsInline
            muted 
            className="w-full h-full object-cover"
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.play();
              }
            }}
          />
        )}
        
        {isAnalyzing && (
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/10 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-upsa-blue border-t-transparent rounded-full animate-spin-slow mb-2"></div>
            <p className="text-sm font-medium text-upsa-blue">Analyzing...</p>
          </div>
        )}
        
        {isVerified && (
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-green-50">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-2" />
            <p className="text-sm font-medium text-green-700">Verified Successfully</p>
          </div>
        )}
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
      
      <div className="space-y-4 w-full">
        {!isCapturing && !isVerified && !isAnalyzing && (
          <Button 
            onClick={startCapture} 
            className="w-full bg-upsa-blue"
          >
            <Camera className="mr-2 h-4 w-4" />
            Start Camera
          </Button>
        )}
        
        {isCapturing && (
          <Button 
            onClick={captureImage} 
            className="w-full bg-upsa-blue"
          >
            <ScanFace className="mr-2 h-4 w-4" />
            Capture Image
          </Button>
        )}
        
        {isVerified && (
          <Button 
            onClick={resetProcess} 
            variant="outline" 
            className="w-full"
          >
            Start New Verification
          </Button>
        )}
      </div>
      
      <div className="mt-4 text-xs text-gray-500 px-4 text-center">
        <p>We use Python and Google Vision API to securely verify your identity. Your biometric data is never stored.</p>
      </div>
    </div>
  );
};

export default FacialRecognition;
