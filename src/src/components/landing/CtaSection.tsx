import React, { useState } from 'react';
import { Button } from '../common/Button';
import { AuthModal } from '../auth/AuthModal';
export const CtaSection: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  return <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-600 mb-8">
            Join thousands of annotators and businesses already using our
            platform to power AI development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" onClick={() => setShowAuthModal(true)}>
              Get Started Now
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setShowAuthModal(true)}>
              Book a Demo
            </Button>
          </div>
          <div className="mt-12">
            <div className="aspect-w-16 aspect-h-9 max-w-2xl mx-auto">
              <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-16 h-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2">Platform Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </section>;
};