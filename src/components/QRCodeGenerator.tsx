
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QrCode } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { students } from '@/data/students';

const QRCodeGenerator = () => {
  const [studentId, setStudentId] = useState('');
  const [generatedQR, setGeneratedQR] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    // Verify student ID exists
    const student = students.find(s => s.id === studentId);
    
    if (!student) {
      toast({
        title: "Invalid Student ID",
        description: "Please enter a valid student ID from the IT13 class.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real implementation, we would generate an actual QR code
    // For this demo, we'll just show a mock QR code
    setGeneratedQR(true);
    
    toast({
      title: "QR Code Generated",
      description: `QR code generated for ${student.fullName}`,
    });
  };

  return (
    <div className="p-6 border rounded-lg bg-white shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Generate Attendance QR Code</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="student-id">Student ID</Label>
          <Input
            id="student-id"
            placeholder="Enter your student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={handleGenerate} 
          className="w-full bg-upsa-blue"
        >
          Generate QR Code
        </Button>
      </div>
      
      {generatedQR && (
        <div className="mt-6 flex flex-col items-center">
          <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
            <QrCode className="w-32 h-32 text-upsa-blue" />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Scan this QR code to mark your attendance
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              toast({
                title: "QR Code Downloaded",
                description: "The QR code has been saved to your device.",
              });
            }}
          >
            Download QR Code
          </Button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
