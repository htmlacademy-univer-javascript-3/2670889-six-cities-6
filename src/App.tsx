import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { Offer } from './interfaces/article';
import { mockGroupedFavorites } from './mocks/favourites';
import { mockOfferDetails } from './mocks/offer';
import NotFound from './pages/404';
import { FavoritesPage } from './pages/Favourites';
import { LoginPage } from './pages/Login';
import Main from './pages/Main';
import { OfferPage } from './pages/Offer';

interface Props {
  offers: Offer[];
}

const isAuthorized = false;

const App: React.FC<Props> = ({ offers }) => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main offers={offers} />} />
      <Route
        path="/favourites"
        element={
          <PrivateRoute isAuthorized={isAuthorized}>
            <FavoritesPage favorites={mockGroupedFavorites} />
          </PrivateRoute>
        }
      />
      <Route
        path="/offer/:id"
        element={<OfferPage offers={mockOfferDetails} nearbyOffers={offers} />}
      />
    </Route>
    <Route
      path="/login"
      element={
        <PublicRoute isAuthorized={isAuthorized}>
          <LoginPage />
        </PublicRoute>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
