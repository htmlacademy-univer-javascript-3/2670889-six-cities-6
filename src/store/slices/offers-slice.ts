import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { cities } from '../../mocks/cities';
import { City, Offer } from '../../types/offer';

interface OffersState {
  offers: Offer[];
  cities: City[];
  selectedCity: City;
  selectedSort: string;
  activeOfferId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: OffersState = {
  offers: [],
  cities: cities ,
  selectedCity: cities[0],
  selectedSort: 'popular',
  activeOfferId: null,
  loading: false,
  error: null,
};

export const fetchOffers = createAsyncThunk<
  Offer[],
  void,
  { extra: AxiosInstance }
>('offers/fetchOffers', async (_, { extra: api }) => {
  const { data } = await api.get<Offer[]>('/offers');
  return data;
});

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
      const foundOffer = state.offers.find(
        (item) => item.id === action.payload,
      );
      if (foundOffer) {
        foundOffer.isFavorite = !foundOffer.isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load offers';
        state.offers = [];
      });
  },
});

export const {
  setSelectedCity,
  setSelectedSort,
  setActiveOfferId,
  toggleFavorite,
} = offersSlice.actions;

export default offersSlice.reducer;
