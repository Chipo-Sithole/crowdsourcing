import React from 'react';
import { LogIn, UserCheck, Search, Edit, Download } from 'lucide-react';
const steps = [{
  title: 'Sign In',
  description: 'Create an account or sign in with your existing credentials.',
  icon: <LogIn className="h-8 w-8 text-green-600" />
}, {
  title: 'Choose Your Role',
  description: 'Select whether you want to annotate data or request annotations.',
  icon: <UserCheck className="h-8 w-8 text-green-600" />
}, {
  title: 'Find or Create Projects',
  description: 'Browse available annotation jobs or create your own projects.',
  icon: <Search className="h-8 w-8 text-green-600" />
}, {
  title: 'Annotate Data',
  description: 'Complete annotation tasks or review submitted annotations.',
  icon: <Edit className="h-8 w-8 text-green-600" />
}, {
  title: 'Get Paid or Download Data',
  description: 'Receive payment for your work or download your labeled datasets.',
  icon: <Download className="h-8 w-8 text-green-600" />
}];
export const HowItWorks: React.FC = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our streamlined process makes it easy to get started with data
            annotation.
          </p>
        </div>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => <div key={index} className="relative flex flex-col items-center">
                {/* Step number bubble */}
                <div className="bg-white flex items-center justify-center w-16 h-16 rounded-full border-2 border-green-500 mb-4 z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};