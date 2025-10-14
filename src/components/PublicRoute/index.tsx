import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PublicRouteProps {
  children: React.ReactElement;
  isAuthorized: boolean;
  redirectPath?: string;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  isAuthorized,
  redirectPath = '/',
}) => {
  const location = useLocation();

  if (isAuthorized) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children;
};
