import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import fullDataSlice from './fullDataSlice';

export const store = configureStore({
  reducer: {
     dataSlice,
     fullDataSlice
  },
});

export default store;
