import React from 'react';
import { Check } from 'lucide-react';
export const AboutSection: React.FC = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Powering the Future of AI with Human Intelligence
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform bridges the gap between AI systems and the human
              expertise needed to train them effectively.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">For Annotators</h3>
                  <p className="text-gray-600">
                    Earn money by completing annotation tasks that match your
                    skills. Work on flexible schedules and build your expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">For Requesters</h3>
                  <p className="text-gray-600">
                    Get high-quality labeled data for your AI models quickly and
                    efficiently. Scale your annotation needs without scaling
                    your team.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">For AI Development</h3>
                  <p className="text-gray-600">
                    Accelerate your machine learning development with precisely
                    labeled datasets across various domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop" alt="Team collaboration" className="object-cover rounded-lg" />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=500&auto=format&fit=crop" alt="Data analysis" className="object-cover rounded-lg" />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop" alt="Developer working" className="object-cover rounded-lg" />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" alt="Remote work" className="object-cover rounded-lg" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-10"></div>
            <div className="hidden lg:block absolute -top-6 -left-6 w-12 h-12 bg-green-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>;
};