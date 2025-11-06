import { Offer } from './offer';
import { City } from './city';

export interface State {
  currentCity: City;
  offers: Offer[];
  favoriteOffers: Offer[];
  sortOption: string;
  activeOfferId: string | null;
  isLoading: boolean;
}
