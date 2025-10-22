import React, { useState } from 'react';
import { X as CloseIcon, Mail as MailIcon, Github as GithubIcon } from 'lucide-react';
import { Button } from '../common/Button';
import { useAuth } from '../../contexts/AuthContext';
import { SurveyModal } from './SurveyModal';
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose
}) => {
  const {
    login,
    user
  } = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [loginError, setLoginError] = useState('');
  if (!isOpen) return null;
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setLoginError('');
    try {
      await login('email', {
        email
      });
      // Check if user is new and show survey if needed
      if (user?.isNewUser) {
        setShowSurvey(true);
      } else {
        onClose();
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const handleOAuthLogin = async (provider: string) => {
    setIsLoading(true);
    setLoginError('');
    try {
      await login(provider);
      // Check if user is new and show survey if needed
      if (user?.isNewUser) {
        setShowSurvey(true);
      } else {
        onClose();
      }
    } catch (error) {
      console.error(`${provider} login failed:`, error);
      setLoginError(`${provider} login failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSurveyComplete = () => {
    setShowSurvey(false);
    onClose();
  };
  if (showSurvey) {
    return <SurveyModal isOpen={true} onComplete={handleSurveyComplete} />;
  }
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Get Started with DataCrowd</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <CloseIcon size={24} />
          </button>
        </div>
        {loginError && <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
            {loginError}
          </div>}
        <div className="space-y-4">
          <Button variant="outline" fullWidth leftIcon={<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />} onClick={() => handleOAuthLogin('google')} isLoading={isLoading}>
            Continue with Google
          </Button>
          <Button variant="outline" fullWidth leftIcon={<GithubIcon size={20} />} onClick={() => handleOAuthLogin('github')} isLoading={isLoading}>
            Continue with GitHub
          </Button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon size={18} className="text-gray-400" />
                </div>
                <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your@email.com" className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
              </div>
            </div>
            <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
              Continue with Email
            </Button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>;
};