import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AnnotatorDashboard } from './AnnotatorDashboard';
import { RequesterDashboard } from './RequesterDashboard';
export const DashboardRouter: React.FC = () => {
  const {
    user,
    isLoading
  } = useAuth();
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading dashboard...</p>
        </div>
      </div>;
  }
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Routes>
      <Route path="/*" element={user.role === 'annotator' ? <AnnotatorDashboard /> : <RequesterDashboard />} />
    </Routes>;
};