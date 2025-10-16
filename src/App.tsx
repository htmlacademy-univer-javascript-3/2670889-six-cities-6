import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { Offer } from './types/offer';
import { mockGroupedFavorites } from './mocks/favourites';
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
      <Route element={<PrivateRoute isAuthorized={isAuthorized} />}>
        <Route
          path="/favourites"
          element={<FavoritesPage favorites={mockGroupedFavorites} />}
        />
      </Route>
      <Route element={<PublicRoute isAuthorized={isAuthorized} />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route
        path="/offer/:id"
        element={<OfferPage />}
      />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
