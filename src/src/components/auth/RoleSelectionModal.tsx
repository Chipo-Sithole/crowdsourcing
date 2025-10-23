import React, { useState } from 'react';
import { Users, Briefcase } from 'lucide-react';
import { Button } from '../common/Button';
import { UserRole } from '../../types';

interface RoleSelectionModalProps {
  isOpen: boolean;
  onRoleSelect: (role: UserRole) => void;
}

export const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({ isOpen, onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleContinue = async () => {
    if (!selectedRole) return;
    setIsLoading(true);
    await onRoleSelect(selectedRole);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-8 shadow-xl animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to DataCrowd!</h2>
          <p className="text-gray-600">Choose how you want to use our platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Annotator Option */}
          <div
            className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
              selectedRole === 'annotator'
                ? 'border-[#38b48f] bg-green-50 shadow-lg'
                : 'border-gray-300 hover:border-gray-400 hover:shadow-md'
            }`}
            onClick={() => setSelectedRole('annotator')}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  selectedRole === 'annotator'
                    ? 'bg-[#38b48f] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">I'm an Annotator</h3>
              <p className="text-gray-600 text-sm mb-4">
                I want to earn money by labeling and annotating data
              </p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#38b48f] mr-2">✓</span>
                  <span>Work on diverse annotation projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b48f] mr-2">✓</span>
                  <span>Flexible work hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b48f] mr-2">✓</span>
                  <span>Get paid for your work</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Requester Option */}
          <div
            className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
              selectedRole === 'requester'
                ? 'border-[#38b48f] bg-green-50 shadow-lg'
                : 'border-gray-300 hover:border-gray-400 hover:shadow-md'
            }`}
            onClick={() => setSelectedRole('requester')}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  selectedRole === 'requester'
                    ? 'bg-[#38b48f] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">I'm a Requester</h3>
              <p className="text-gray-600 text-sm mb-4">
                I need high-quality labeled data for my AI projects
              </p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#38b48f] mr-2">✓</span>
                  <span>Create custom annotation projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b48f] mr-2">✓</span>
                  <span>Access skilled annotators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38b48f] mr-2">✓</span>
                  <span>Scale your AI/ML projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handleContinue}
            disabled={!selectedRole}
            isLoading={isLoading}
            className="bg-[#38b48f] hover:bg-[#2e5d4f] text-white px-12 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};
