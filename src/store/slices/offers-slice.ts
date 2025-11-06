import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { cities } from '../../mocks/cities';
import { mockOffers } from '../../mocks/offers';

interface OffersState {
  offers: Offer[];
  cities: typeof cities;
  selectedCity: (typeof cities)[0];
  selectedSort: string;
  activeOfferId: string | null;
}

const initialState: OffersState = {
  offers: mockOffers,
  cities: cities,
  selectedCity: cities[0],
  selectedSort: 'popular',
  activeOfferId: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<(typeof cities)[0]>) => {
      state.selectedCity = action.payload;
      state.activeOfferId = null;
    },
    setSelectedSort: (state, action: PayloadAction<string>) => {
      state.selectedSort = action.payload;
    },
    setActiveOfferId: (state, action: PayloadAction<string | null>) => {
      state.activeOfferId = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const offer = state.offers.find((offer) => offer.id === action.payload);
      if (offer) {
        offer.isFavorite = !offer.isFavorite;
      }
    },
  },
});

export const {
  setSelectedCity,
  setSelectedSort,
  setActiveOfferId,
  toggleFavorite,
} = offersSlice.actions;

export default offersSlice.reducer;
