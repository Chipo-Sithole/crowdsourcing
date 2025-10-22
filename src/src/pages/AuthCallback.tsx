import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    login
  } = useAuth();
  useEffect(() => {
    const handleCallback = async () => {
      const provider = searchParams.get('provider');
      const token = searchParams.get('token');
      if (provider && token) {
        try {
          // In a real app, we would validate the token with our backend
          await login(provider);
          navigate('/dashboard');
        } catch (error) {
          console.error('Authentication error:', error);
          navigate('/');
        }
      } else {
        navigate('/');
      }
    };
    handleCallback();
  }, [searchParams, login, navigate]);
  return <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
        <p className="mt-4 text-lg">Completing authentication...</p>
      </div>
    </div>;
};