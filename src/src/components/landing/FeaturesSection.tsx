import React from 'react';
import { Filter, Shield, DollarSign, Layers, Users } from 'lucide-react';
const features = [{
  title: 'Advanced Job Filtering',
  description: 'Find the perfect annotation tasks that match your skills and interests with our powerful filtering system.',
  icon: <Filter className="h-8 w-8 text-green-600" />
}, {
  title: 'Quality Control',
  description: 'Our platform ensures high-quality annotations through multiple validation layers and feedback systems.',
  icon: <Shield className="h-8 w-8 text-green-600" />
}, {
  title: 'Secure Payouts',
  description: 'Get paid reliably and securely for your annotation work with our transparent payment system.',
  icon: <DollarSign className="h-8 w-8 text-green-600" />
}, {
  title: 'Workspace Management',
  description: 'Organize your projects, team members, and datasets in customizable workspaces.',
  icon: <Layers className="h-8 w-8 text-green-600" />
}, {
  title: 'Role-Based Dashboards',
  description: "Access tailored interfaces whether you're an annotator or a requester to maximize productivity.",
  icon: <Users className="h-8 w-8 text-green-600" />
}];
export const FeaturesSection: React.FC = () => {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">
            Powerful Features for Data Annotation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform is designed to make data annotation efficient,
            accurate, and rewarding for everyone involved.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};