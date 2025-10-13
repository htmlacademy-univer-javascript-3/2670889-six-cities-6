import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactElement;
  isAuthorized: boolean;
  redirectPath?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthorized,
  redirectPath = '/login',
}) => {
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children;
};
