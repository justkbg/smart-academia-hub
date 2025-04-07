
import React, { useState } from 'react';
import { Camera, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { students } from '@/data/students';

const FacialRecognition = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [isRecognized, setIsRecognized] = useState<boolean | null>(null);
  const [recognizedStudent, setRecognizedStudent] = useState<typeof students[0] | null>(null);
  const { toast } = useToast();

  const startFacialRecognition = () => {
    setIsScanning(true);
    
    // This would call a Python backend in a real implementation
    // For this demo, we'll simulate facial recognition
    setTimeout(() => {
      // Randomly determine if face is recognized
      const success = Math.random() > 0.3;
      setIsRecognized(success);
      
      if (success) {
        // Randomly pick a student for the demo
        const randomIndex = Math.floor(Math.random() * students.length);
        const student = students[randomIndex];
        setRecognizedStudent(student);
        
        toast({
          title: "Student Verified!",
          description: `Successfully identified as ${student.fullName}.`,
          variant: "default",
        });
      } else {
        toast({
          title: "Verification Failed",
          description: "Could not recognize face. Please try again or use an alternative method.",
          variant: "destructive",
        });
      }
      
      setIsScanning(false);
    }, 3000);
  };

  const resetRecognition = () => {
    setIsRecognized(null);
    setRecognizedStudent(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Facial Recognition</h2>
      
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
          {isScanning ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Camera className="w-24 h-24 text-upsa-blue animate-pulse" />
                <div className="absolute inset-0 border-2 border-upsa-blue rounded animate-scanning"></div>
              </div>
              <p className="absolute bottom-4 text-sm text-gray-600">Scanning...</p>
            </div>
          ) : isRecognized === true ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-50">
              <div className="mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{recognizedStudent?.fullName}</h3>
              <p className="text-sm text-gray-600">ID: {recognizedStudent?.id}</p>
            </div>
          ) : isRecognized === false ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50">
              <div className="mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Face Not Recognized</h3>
              <p className="text-sm text-gray-600">Please try again</p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="w-24 h-24 text-gray-300" />
              <p className="absolute bottom-4 text-sm text-gray-600">Ready to scan</p>
            </div>
          )}
        </div>
        
        <div className="w-full">
          <p className="text-sm text-gray-600 mb-4 text-center">
            {isRecognized === null 
              ? "Position your face in frame and click scan to verify your identity"
              : isRecognized 
                ? "Successfully verified! Your attendance has been recorded."
                : "Verification failed. Please try again or use an alternative method."}
          </p>
          
          {isRecognized === null ? (
            <Button 
              onClick={startFacialRecognition}
              disabled={isScanning}
              className="w-full bg-upsa-blue"
            >
              {isScanning ? "Scanning..." : "Start Facial Recognition"}
            </Button>
          ) : (
            <Button 
              onClick={resetRecognition}
              variant="outline"
              className="w-full"
            >
              Try Again
            </Button>
          )}
          
          <div className="mt-4 text-xs text-center text-gray-500">
            <p>Powered by Python OpenCV & Google Vision API</p>
            <p className="mt-1">(This is a simulation for demonstration purposes)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialRecognition;
