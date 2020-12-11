import { configureStore } from '@reduxjs/toolkit';
import spendingsReducer from './spendingsSlice';

export default configureStore({
  reducer: {
    spendings: spendingsReducer,
  },
});