import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { favoriteMockOffers, mockOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offers={mockOffers} favorites={favoriteMockOffers} />
    </BrowserRouter>
  </React.StrictMode>,
);
