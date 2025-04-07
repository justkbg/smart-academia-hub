
import React, { useState } from 'react';
import { ShoppingCart, Search, Tag, MapPin, Plus, Store, User, Settings, Menu, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessProfileForm from '@/components/BusinessProfileForm';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const MarketplacePage = () => {
  const [isBusinessFormOpen, setIsBusinessFormOpen] = useState(false);
  
  const featuredItems = [
    {
      title: "Data Structures Textbook",
      price: "₵120",
      condition: "Like New",
      seller: "Michael A.",
      image: "placeholder.svg",
      rating: 4.5
    },
    {
      title: "HP Laptop - 8GB RAM",
      price: "₵2,500",
      condition: "Good",
      seller: "Sarah K.",
      image: "placeholder.svg",
      rating: 4.0
    },
    {
      title: "Python Programming Course",
      price: "₵200",
      condition: "Digital",
      seller: "David M.",
      image: "placeholder.svg",
      rating: 5.0
    }
  ];
  
  const businessProfiles = [
    {
      name: "TechFix Solutions",
      owner: "Frederick Owusu",
      category: "Technology Services",
      description: "Laptop and phone repairs, software installation, and tech support for students.",
      image: "placeholder.svg",
      rating: 4.8
    },
    {
      name: "EduTutors",
      owner: "Noella Ayesu",
      category: "Academic Tutoring",
      description: "Professional tutoring services for IT subjects including programming, databases, and networking.",
      image: "placeholder.svg",
      rating: 4.6
    },
    {
      name: "Campus Designs",
      owner: "Emmanuel Adom",
      category: "Design & Creative",
      description: "Graphic design services, flyer creation, and UI/UX design for student projects.",
      image: "placeholder.svg",
      rating: 4.3
    }
  ];
  
  const services = [
    {
      title: "Website Development",
      price: "From ₵500",
      provider: "TechFix Solutions",
      image: "placeholder.svg",
      rating: 4.7
    },
    {
      title: "Python Tutoring",
      price: "₵50/hour",
      provider: "EduTutors",
      image: "placeholder.svg",
      rating: 4.9
    },
    {
      title: "Logo Design",
      price: "₵150",
      provider: "Campus Designs",
      image: "placeholder.svg",
      rating: 4.4
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              IT13 Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buy, sell, or exchange academic materials, electronics, and find services offered by your fellow IT13 students.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-grow">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      className="pl-10" 
                      placeholder="Search for items, services, businesses..." 
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <Tag className="mr-2 h-4 w-4" />
                    Categories
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-upsa-blue hover:bg-upsa-blue/90">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Post Item
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Post a New Item</DialogTitle>
                        <DialogDescription>
                          Fill out the details below to list your item on the marketplace.
                        </DialogDescription>
                      </DialogHeader>
                      {/* Item posting form would go here */}
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Item Name</label>
                          <Input placeholder="Enter item name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Category</label>
                          <Input placeholder="e.g., Textbook, Electronics" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Price (₵)</label>
                          <Input type="number" placeholder="Enter price" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Description</label>
                          <Input placeholder="Describe your item" />
                        </div>
                        <Button type="submit" className="w-full bg-upsa-blue hover:bg-upsa-blue/90">
                          Post Item
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog open={isBusinessFormOpen} onOpenChange={setIsBusinessFormOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Store className="h-4 w-4" />
                        <span>Business Profile</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Create Business Profile</DialogTitle>
                        <DialogDescription>
                          Showcase your services or products to the IT13 community.
                        </DialogDescription>
                      </DialogHeader>
                      <BusinessProfileForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </motion.div>
          
          <Tabs defaultValue="items">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="items">Items</TabsTrigger>
              <TabsTrigger value="businesses">Businesses</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="items">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {featuredItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <img src={item.image} alt={item.title} className="w-24 h-24 text-gray-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <Badge className="bg-upsa-blue">{item.price}</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <span>Condition: {item.condition}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>Seller: {item.seller}</span>
                      </div>
                      <Button className="w-full mt-4 bg-upsa-blue hover:bg-upsa-blue/90">
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="businesses">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {businessProfiles.map((business, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-24 bg-upsa-blue/10 flex items-center justify-center p-4">
                      <div className="font-bold text-xl text-upsa-blue">{business.name}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline">{business.category}</Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                          <span className="text-sm">{business.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{business.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>Owner: {business.owner}</span>
                      </div>
                      <Button className="w-full mt-4 bg-upsa-blue hover:bg-upsa-blue/90">
                        Contact Business
                      </Button>
                    </div>
                  </motion.div>
                ))}
                <Card className="bg-gray-50 border-dashed border-2 hover:bg-gray-100 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[300px]">
                    <Button 
                      variant="outline" 
                      className="h-12 w-12 rounded-full mb-4"
                      onClick={() => setIsBusinessFormOpen(true)}
                    >
                      <Plus className="h-6 w-6" />
                    </Button>
                    <h3 className="text-lg font-semibold mb-2 text-center">Create Your Business Profile</h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Showcase your services to fellow IT13 students
                    </p>
                    <Button 
                      variant="default" 
                      className="bg-upsa-blue hover:bg-upsa-blue/90"
                      onClick={() => setIsBusinessFormOpen(true)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="services">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-32 bg-gray-100 flex items-center justify-center">
                      <img src={service.image} alt={service.title} className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <Badge className="bg-green-500 hover:bg-green-600">{service.price}</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <span>{service.provider}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                          <span>{service.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-upsa-blue hover:bg-upsa-blue/90">
                        Book Service
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketplacePage;
