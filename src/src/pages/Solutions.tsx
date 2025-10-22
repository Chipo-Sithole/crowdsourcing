import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
export const Solutions: React.FC = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8">Solutions</h1>
        <p className="text-lg text-gray-600">
          This page will contain details about our solutions for different
          industries and use cases.
        </p>
      </div>
      <Footer />
    </div>;
};