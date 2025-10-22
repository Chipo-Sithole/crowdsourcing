import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../common/Button';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types';
interface SurveyModalProps {
  isOpen: boolean;
  onComplete: () => void;
}
export const SurveyModal: React.FC<SurveyModalProps> = ({
  isOpen,
  onComplete
}) => {
  const {
    user,
    updateUser,
    setUserRole
  } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // Form state
  const [role, setRole] = useState<UserRole | null>(null);
  const [position, setPosition] = useState<string[]>([]);
  const [education, setEducation] = useState('');
  const [heardFrom, setHeardFrom] = useState('');
  const [availability, setAvailability] = useState<number | null>(null);
  const [annotationTypes, setAnnotationTypes] = useState<string[]>([]);
  if (!isOpen) return null;
  const positionOptions = ['Data Scientist', 'Machine Learning Engineer', 'Business Analyst', 'Software Developer', 'Data Annotator / Labeler', 'Researcher', 'Product Manager', 'Student', 'Other'];
  const educationOptions = ['High School / Secondary', 'Diploma / Certificate', "Bachelor's Degree", "Master's Degree", 'PhD', 'Other'];
  const heardFromOptions = ['Search Engine (Google, Bing)', 'Social Media (LinkedIn, Twitter)', 'Friend or Colleague', 'Conference or Event', 'Blog or Publication', 'Advertisement', 'Other'];
  const annotationTypeOptions = ['Object Detection', 'Classification', 'Segmentation', 'Keypoints', 'NLP', 'Audio'];
  const steps = [{
    title: 'Account Verification',
    description: 'Help us verify your account and personalize your experience',
    isRequired: true,
    content: <div className="space-y-4 mt-6">
          <div className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${role === 'annotator' ? 'border-[#38b48f] bg-green-50' : 'border-gray-300 hover:border-gray-400'}`} onClick={() => setRole('annotator')}>
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${role === 'annotator' ? 'border-[#38b48f]' : 'border-gray-400'}`}>
                {role === 'annotator' && <div className="w-3 h-3 rounded-full bg-[#38b48f]"></div>}
              </div>
              <div>
                <h3 className="text-lg font-medium">Annotator</h3>
                <p className="text-gray-600">
                  I want to earn money labeling data for AI training
                </p>
              </div>
            </div>
          </div>
          <div className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${role === 'requester' ? 'border-[#38b48f] bg-green-50' : 'border-gray-300 hover:border-gray-400'}`} onClick={() => setRole('requester')}>
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${role === 'requester' ? 'border-[#38b48f]' : 'border-gray-400'}`}>
                {role === 'requester' && <div className="w-3 h-3 rounded-full bg-[#38b48f]"></div>}
              </div>
              <div>
                <h3 className="text-lg font-medium">Requester / Job Lister</h3>
                <p className="text-gray-600">
                  I want to post annotation jobs and manage workspaces
                </p>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: 'Your Professional Role',
    description: 'Required for account verification',
    isRequired: true,
    content: <div className="space-y-3 mt-6">
          {positionOptions.map(option => <label key={option} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <input type="checkbox" checked={position.includes(option)} onChange={e => {
          if (e.target.checked) {
            setPosition([...position, option]);
          } else {
            setPosition(position.filter(p => p !== option));
          }
        }} className="h-5 w-5 text-[#38b48f] rounded focus:ring-[#38b48f]" />
              <span>{option}</span>
            </label>)}
        </div>
  }, {
    title: 'Education Level',
    description: 'What is your highest level of education?',
    isRequired: false,
    content: <div className="space-y-3 mt-6">
          {educationOptions.map(option => <label key={option} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <input type="radio" checked={education === option} onChange={() => setEducation(option)} className="h-5 w-5 text-[#38b48f] focus:ring-[#38b48f]" />
              <span>{option}</span>
            </label>)}
        </div>
  }, {
    title: 'How did you hear about us?',
    description: 'Required for security verification',
    isRequired: true,
    content: <div className="space-y-3 mt-6">
          {heardFromOptions.map(option => <label key={option} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <input type="radio" checked={heardFrom === option} onChange={() => setHeardFrom(option)} className="h-5 w-5 text-[#38b48f] focus:ring-[#38b48f]" />
              <span>{option}</span>
            </label>)}
        </div>
  }, {
    title: 'Time Availability',
    description: 'How many hours per week can you dedicate?',
    isRequired: false,
    content: <div className="mt-6">
          <input type="range" min="1" max="40" value={availability || 10} onChange={e => setAvailability(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#38b48f]" />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>1 hour</span>
            <span>10 hours</span>
            <span>20 hours</span>
            <span>30 hours</span>
            <span>40+ hours</span>
          </div>
          <div className="text-center mt-4 font-medium text-[#38b48f]">
            {availability || 10} hours per week
          </div>
        </div>
  }, {
    title: 'Preferred Annotation Types',
    description: 'What types of tasks are you interested in?',
    isRequired: false,
    content: <div className="space-y-3 mt-6">
          {annotationTypeOptions.map(option => <label key={option} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <input type="checkbox" checked={annotationTypes.includes(option)} onChange={e => {
          if (e.target.checked) {
            setAnnotationTypes([...annotationTypes, option]);
          } else {
            setAnnotationTypes(annotationTypes.filter(t => t !== option));
          }
        }} className="h-5 w-5 text-[#38b48f] rounded focus:ring-[#38b48f]" />
              <span>{option}</span>
            </label>)}
        </div>
  }];
  const currentStepData = steps[currentStep];
  const canProceed = () => {
    if (currentStepData.isRequired) {
      if (currentStep === 0) return !!role;
      if (currentStep === 1) return position.length > 0; // Professional role required
      if (currentStep === 3) return !!heardFrom; // Referral source required
    }
    return true;
  };
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleComplete = async () => {
    if (!role) return;
    setIsLoading(true);
    setError('');
    try {
      // Update user role
      await setUserRole(role);
      // Update preferences
      await updateUser({
        isNewUser: false,
        preferences: {
          position,
          education,
          heardFrom,
          availability: availability || 10,
          annotationTypes
        }
      });
      onComplete();
    } catch (error) {
      console.error('Failed to update user:', error);
      setError('Failed to save your preferences. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl animate-fade-in">
        <div className="mb-6">
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-[#38b48f] h-2.5 rounded-full transition-all" style={{
            width: `${(currentStep + 1) / steps.length * 100}%`
          }}></div>
          </div>
          <h2 className="text-2xl font-bold mt-6">{currentStepData.title}</h2>
          <p className="text-gray-600">{currentStepData.description}</p>
        </div>
        {error && <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
            {error}
          </div>}
        {currentStepData.content}
        <div className="mt-8 flex justify-between">
          <Button variant="secondary" onClick={handleBack} disabled={currentStep === 0} leftIcon={<ChevronLeft size={16} />}>
            Back
          </Button>
          <Button variant="primary" onClick={handleNext} disabled={!canProceed() || isLoading} isLoading={isLoading} rightIcon={currentStep < steps.length - 1 ? <ChevronRight size={16} /> : undefined}>
            {currentStep < steps.length - 1 ? 'Next' : 'Complete'}
          </Button>
        </div>
        {!currentStepData.isRequired && <p className="mt-4 text-center text-sm text-gray-500">
            This step is optional. You can{' '}
            <button className="text-[#38b48f] hover:underline" onClick={handleNext}>
              skip
            </button>
            .
          </p>}
      </div>
    </div>;
};