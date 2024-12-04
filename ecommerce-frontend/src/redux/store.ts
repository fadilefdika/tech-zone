// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice'; // Pastikan path sesuai dengan file Anda

const store = configureStore({
  reducer: {
    products: productReducer, // Ganti sesuai dengan reducer yang Anda gunakan
  },
});

export default store;

// Optional: Untuk type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
