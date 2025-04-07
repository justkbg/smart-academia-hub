
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Camera, Upload, X } from 'lucide-react';

const BusinessProfileForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
    profileImage: null as File | null,
    imagePreview: '' as string
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        profileImage: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };
  
  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      profileImage: null,
      imagePreview: ''
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Business Profile Created!",
        description: "Your business profile has been successfully created.",
      });
      setIsSubmitting(false);
      // In a real app, we would redirect or update the UI to show the created profile
    }, 1500);
  };
  
  const businessCategories = [
    "Technology Services",
    "Academic Tutoring",
    "Design & Creative",
    "Food & Catering",
    "Event Planning",
    "Fashion & Clothing",
    "Delivery Services",
    "Beauty & Wellness",
    "Photography & Video",
    "Other"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Business Profile</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center justify-center mb-6">
            {formData.imagePreview ? (
              <div className="relative rounded-full overflow-hidden w-32 h-32">
                <img 
                  src={formData.imagePreview} 
                  alt="Profile Preview" 
                  className="w-full h-full object-cover" 
                />
                <button 
                  type="button" 
                  onClick={removeImage} 
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-full w-32 h-32 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <Camera className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-1 text-xs text-gray-500">Upload logo</p>
                </div>
              </div>
            )}
            
            <div className="mt-4">
              <Label htmlFor="profileImage" className="cursor-pointer inline-flex items-center px-4 py-2 bg-upsa-blue text-white rounded-md hover:bg-upsa-blue/90 transition-colors">
                <Upload className="mr-2 h-4 w-4" />
                {formData.profileImage ? 'Change Image' : 'Upload Image'}
              </Label>
              <Input 
                id="profileImage" 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="hidden" 
              />
            </div>
          </div>
          
          {/* Business Name */}
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Enter your business name"
              required
            />
          </div>
          
          {/* Business Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Business Category</Label>
            <Select 
              onValueChange={handleSelectChange} 
              value={formData.category}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {businessCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Business Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Business Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your products or services"
              rows={4}
              required
            />
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email</Label>
              <Input
                id="contactEmail"
                name="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleInputChange}
                placeholder="business@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Phone Number</Label>
              <Input
                id="contactPhone"
                name="contactPhone"
                type="tel"
                value={formData.contactPhone}
                onChange={handleInputChange}
                placeholder="e.g., 0244123456"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-upsa-blue hover:bg-upsa-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Profile...' : 'Create Business Profile'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BusinessProfileForm;
