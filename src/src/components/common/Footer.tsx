import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Instagram, Github } from 'lucide-react';
export const Footer: React.FC = () => {
  return <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="text-xl font-bold">
              DataCrowd
            </Link>
            <p className="mt-4 text-gray-600">
              Powering the future of AI with human intelligence through quality
              data annotation.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Github size={20} />
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-600 hover:text-gray-900">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Annotation Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} DataCrowd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mr-4">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};