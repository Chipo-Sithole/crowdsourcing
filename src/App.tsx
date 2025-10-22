import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';
export function App() {
  return <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-white">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>;
}