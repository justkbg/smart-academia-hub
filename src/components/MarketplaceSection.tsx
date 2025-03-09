
import React from 'react';
import { ShoppingCart, MapPin, CreditCard, Car } from 'lucide-react';

const MarketplaceSection = () => {
  return (
    <section id="marketplace" className="section-padding bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-upsa-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-upsa-blue/10 rounded-full blur-3xl"></div>
              
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl relative z-10">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Student Marketplace</h3>
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-upsa-blue/10 text-upsa-blue">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search for books, gadgets, rides..."
                      className="w-full rounded-lg border border-gray-200 py-2.5 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-upsa-blue focus:border-transparent text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-4 overflow-x-auto py-1">
                    <span className="inline-flex items-center px-3 py-1 bg-upsa-blue text-white text-xs font-medium rounded-full whitespace-nowrap">
                      All Items
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full whitespace-nowrap">
                      Textbooks
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full whitespace-nowrap">
                      Electronics
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full whitespace-nowrap">
                      Rides
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg shadow-sm p-3 flex items-start hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h4 className="text-sm font-medium text-gray-900">Database Systems Textbook</h4>
                          <span className="text-sm font-bold text-upsa-blue">GH₵80</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Almost new, used for one semester only</p>
                        <div className="flex items-center mt-2">
                          <div className="flex -space-x-1 overflow-hidden">
                            <div className="w-5 h-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs text-gray-500">K</div>
                          </div>
                          <span className="text-xs text-gray-500 ml-1.5">Kofi A.</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm p-3 flex items-start hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <Car className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h4 className="text-sm font-medium text-gray-900">Ride to East Legon</h4>
                          <span className="text-sm font-bold text-upsa-blue">GH₵25</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Leaving campus at 5:00 PM, 3 seats available</p>
                        <div className="flex items-center mt-2">
                          <div className="flex -space-x-1 overflow-hidden">
                            <div className="w-5 h-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs text-gray-500">A</div>
                          </div>
                          <span className="text-xs text-gray-500 ml-1.5">Ama D.</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm p-3 flex items-start hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h4 className="text-sm font-medium text-gray-900">Laptop Charger - HP</h4>
                          <span className="text-sm font-bold text-upsa-blue">GH₵50</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Brand new, compatible with most HP models</p>
                        <div className="flex items-center mt-2">
                          <div className="flex -space-x-1 overflow-hidden">
                            <div className="w-5 h-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs text-gray-500">Y</div>
                          </div>
                          <span className="text-xs text-gray-500 ml-1.5">Yaw B.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 text-sm text-upsa-blue font-medium hover:underline">
                    View all listings
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-upsa-blue text-sm font-medium mb-4">
              Student Marketplace
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Buy, Sell, and Share within Your Community
            </h2>
            <p className="text-gray-600 mb-8">
              Our student marketplace connects IT13 students to exchange academic materials, find ride-sharing opportunities, and trade tech gadgets within the UPSA community.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ShoppingCart className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Student Exchange Platform</h3>
                  <p className="mt-1 text-sm text-gray-500">List or find textbooks, study materials, and tech gadgets specifically relevant to IT courses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Campus Ride-Sharing</h3>
                  <p className="mt-1 text-sm text-gray-500">Find or offer rides to and from campus with fellow students going your way.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CreditCard className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Secure Payments</h3>
                  <p className="mt-1 text-sm text-gray-500">Integrated payment system for safe and convenient transactions between students.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Car className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Campus Delivery</h3>
                  <p className="mt-1 text-sm text-gray-500">Arrange for item pickup and delivery at convenient campus locations.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-10 px-6 py-3 bg-upsa-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Visit Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
