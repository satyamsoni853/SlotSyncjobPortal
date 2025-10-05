
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getItem, removeItem, setItem } from './Components/Service/LocalStorageService';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token?: string | null, user?: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize state from localStorage
    return !!getItem('isAuthenticated');
  });

  const login = () => {
    console.log('AuthContext: Logging in user.');
    setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };
  const logout = () => {
    console.log('AuthContext: Logging out user.');
    removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
