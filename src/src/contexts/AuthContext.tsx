import React, { useEffect, useState, createContext, useContext } from 'react';
import { User, UserRole } from '../types';
import { mockLogin, mockGetCurrentUser, mockUpdateUser } from '../mock-api/auth';
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (provider: string, credentials?: {
    email: string;
  }) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<User>) => Promise<void>;
  setUserRole: (role: UserRole) => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await mockGetCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);
  const login = async (provider: string, credentials?: {
    email: string;
  }) => {
    setIsLoading(true);
    try {
      const user = await mockLogin(provider, credentials);
      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
  };
  const updateUser = async (data: Partial<User>) => {
    if (!user) return;
    setIsLoading(true);
    try {
      const updatedUser = await mockUpdateUser(user.id, data);
      setUser(updatedUser);
    } finally {
      setIsLoading(false);
    }
  };
  const setUserRole = async (role: UserRole) => {
    if (!user) return;
    return updateUser({
      role
    });
  };
  return <AuthContext.Provider value={{
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser,
    setUserRole
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};