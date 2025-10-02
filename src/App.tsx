import React from 'react';
import { Offer } from './interfaces/article';
import Main from './pages/Main';

interface Props {
  offers: Offer[];
}

const App: React.FC<Props> = ({ offers }) => (
  <>
    <Main offers={offers} />
  </>
);

export default App;
