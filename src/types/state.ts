import { City, Offer } from './offer';

export interface State {
  currentCity: City;
  offers: Offer[];
  favoriteOffers: Offer[];
  sortOption: string;
  activeOfferId: string | null;
  isLoading: boolean;
}
