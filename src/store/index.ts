import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../api/api';
import nearbySlice from './slices/nearby-slice';
import detailSlice from './slices/offer-slice';
import offersSlice from './slices/offers-slice';

const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersSlice,
    nearby: nearbySlice,
    detail: detailSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
