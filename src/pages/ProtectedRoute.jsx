import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { fakeAuthProvider } from '@/lib/auth';

const ProtectedRoute = () => {
  return fakeAuthProvider.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;