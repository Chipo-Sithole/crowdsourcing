import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
export const Blog: React.FC = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-lg text-gray-600">
          This page will contain our blog posts and articles.
        </p>
      </div>
      <Footer />
    </div>;
};