import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import NotFound from './pages/404';
import { FavoritesPage } from './pages/Favorites';
import { LoginPage } from './pages/Login';
import Main from './pages/Main';
import { OfferPage } from './pages/Offer';

const isAuthorized = false;

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route element={<PrivateRoute isAuthorized={isAuthorized} />}>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route element={<PublicRoute isAuthorized={isAuthorized} />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/offer/:id" element={<OfferPage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
