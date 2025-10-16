import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

const isAuthorized = false;

export const Layout = () => (
  <div className="page">
    <Header isAuthorized={isAuthorized} />
    <Outlet />
  </div>
);
