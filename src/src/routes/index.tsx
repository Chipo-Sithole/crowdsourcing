import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LandingPage } from '../pages/LandingPage';
import { Products } from '../pages/Products';
import { Solutions } from '../pages/Solutions';
import { Resources } from '../pages/Resources';
import { Pricing } from '../pages/Pricing';
import { Docs } from '../pages/Docs';
import { Blog } from '../pages/Blog';
import { AuthCallback } from '../pages/AuthCallback';
import { Dashboard } from '../pages/Dashboard';
import { DashboardRouter } from '../pages/dashboard/DashboardRouter';
// Protected route component
const ProtectedRoute: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const {
    isAuthenticated,
    isLoading
  } = useAuth();
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
export const AppRoutes: React.FC = () => {
  return <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      {/* New dashboard route */}
      <Route path="/explore" element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} />
      {/* Original dashboard routes */}
      <Route path="/dashboard/*" element={<ProtectedRoute>
            <DashboardRouter />
          </ProtectedRoute>} />
      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>;
};