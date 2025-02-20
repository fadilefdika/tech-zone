// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Menggunakan localStorage sebagai default storage
import productReducer from './slice/productSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { productApi } from './service/productApi';

// Konfigurasi persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['temporaryData'], // State yang tidak ingin dipersist
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, productReducer);

// Buat store dengan middleware untuk mengabaikan peringatan serializability
const store = configureStore({
  reducer: {
    products: persistedReducer,
    [productApi.reducerPath]: productApi.reducer, // Menambahkan productApi.reducer ke dalam store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Abaikan action redux-persist agar tidak memunculkan peringatan
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware), // Menambahkan middleware productApi
});

// Untuk persist store
export const persistor = persistStore(store);

export default store;

// Optional: Untuk type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
