
import React, { useState } from 'react';
import { Button } from '../common/Button';
import { AuthModal } from '../auth/AuthModal';





export const HeroSection: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#e6fff5] to-[#38b48f]">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'repeating-linear-gradient(90deg,rgba(56,180,143,0.08) 0 1px,transparent 1px 80px),repeating-linear-gradient(0deg,rgba(56,180,143,0.08) 0 1px,transparent 1px 80px)'}}></div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-0 lg:gap-0">
        {/* Left: Text & CTA */}
        <div className="flex-1 w-full max-w-xl text-[#1a3c2b] pt-8 pb-16 lg:py-0 flex flex-col justify-center">
          <h1 className="font-extrabold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
            Collect And Sell Your Extraordinary Data
          </h1>
          <p className="text-base lg:text-lg text-[#2e5d4f] mb-8 max-w-md font-normal" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
            You can get started with your annotation project in a few minutes and connect with a global audience. Power your AI with beautiful, precise, and scalable datasets.
          </p>
          <div className="flex gap-4 mb-8">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => setShowAuthModal(true)}
              className="bg-[#38b48f] hover:bg-[#2e5d4f] text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 text-base"
            >
              Explore Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setShowAuthModal(true)}
              className="border border-[#38b48f] text-[#38b48f] px-8 py-3 rounded-xl font-semibold hover:bg-[#38b48f] hover:text-white transition-all duration-300 text-base"
            >
              Get early Access
            </Button>
          </div>
          {/* Avatars or contributors */}
          <div className="flex items-center gap-[-12px] mt-2">
            {['Sarah', 'Mike', 'Alex', 'Emma', 'John'].map((name, i) => (
              <img key={i} src={`https://ui-avatars.com/api/?name=${name}&background=38b48f&color=fff&size=128`} alt="Contributor" className="w-10 h-10 rounded-full border-2 border-[#38b48f] shadow-md -ml-3 first:ml-0" />
            ))}
          </div>
        </div>

        {/* Right: Visual Card */}
        <div className="flex-1 flex justify-center items-center pt-8 pb-16 lg:py-0">
          <div className="relative w-[520px] max-w-full">
            <div className="relative aspect-[4/3] rounded-xl border-4 border-[#38b48f] bg-white shadow-xl overflow-hidden">
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop"
                alt="Urban street with vehicles"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
              {/* Fallback gradient background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              {/* Annotation overlay */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Car */}
                <rect x="12" y="58" width="38" height="23" fill="rgba(56,180,143,0.12)" stroke="#38b48f" strokeWidth="0.6" rx="1" />
                {/* Person */}
                <rect x="62" y="48" width="12" height="28" fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth="0.6" rx="1" />
                {/* Traffic sign */}
                <rect x="80" y="26" width="10" height="12" fill="rgba(52,211,153,0.12)" stroke="#34d399" strokeWidth="0.6" rx="1" />
              </svg>
              {/* Labels */}
              <div className="absolute" style={{ top: '56%', left: '12%' }}>
                <span className="bg-[#38b48f] text-white text-[10px] px-2 py-0.5 rounded-md shadow">Vehicle • 98%</span>
              </div>
              <div className="absolute" style={{ top: '46%', left: '62%' }}>
                <span className="bg-[#10b981] text-white text-[10px] px-2 py-0.5 rounded-md shadow">Person • 95%</span>
              </div>
              <div className="absolute" style={{ top: '24%', left: '80%' }}>
                <span className="bg-[#34d399] text-white text-[10px] px-2 py-0.5 rounded-md shadow">Sign • 99%</span>
              </div>
            </div>
          </div> 
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </section>
  );
};