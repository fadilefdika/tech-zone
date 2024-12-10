import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types/types';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/products';

interface ProductState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentProduct: Product | null;
}

const initialState: ProductState = {
  items: [],
  status: 'idle',
  error: null,
  currentProduct: null,
};

// Fetch all products
export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Get a single product by ID
export const getProductById = createAsyncThunk<Product, number>('products/getProductById', async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
});

// Create a new product
export const createProduct = createAsyncThunk<Product, Product>('products/createProduct', async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
});

// Update an existing product
export const updateProduct = createAsyncThunk<Product, { product: Product; productId: string }>('products/updateProduct', async ({ product, productId }) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, product);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update product');
  }
});

export const deleteProduct = createAsyncThunk<void, string>('products/deleteProduct', async (productId) => {
  try {
    await axios.delete(`${API_URL}/${productId}`);
  } catch (error) {
    throw new Error('Failed to delete product');
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      })

      // Handling getProductById
      .addCase(getProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch product by ID';
      })

      // Handling createProduct
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload); // Add the new product to the list
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to save product';
      })

      // Handling updateProduct
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Update the product in the list
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update product';
      })

      // Handling deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const productId = action.meta.arg; // Get the productId from the action's meta
        state.items = state.items.filter((item) => item.id !== Number(productId)); // Remove the product from the list
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete product';
      });
  },
});

export default productSlice.reducer;
