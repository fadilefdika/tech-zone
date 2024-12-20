import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types/types';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

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

// export const uploadImage = createAsyncThunk<string, File>('products/uploadImage', async (file, { rejectWithValue }) => {
//   try {
//     console.log('Uploading file:', file); // Log untuk melihat file yang dikirim

//     const formData = new FormData();
//     formData.append('file', file);

//     const response = await axios.post('http://localhost:3001/api/uploads', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log('Server response:', response); // Log untuk melihat respons server

//     // Periksa jika respons tidak sesuai yang diinginkan
//     if (response.status !== 200) {
//       console.error('Failed to upload image', response.status, response.statusText);
//       return rejectWithValue('Error uploading image');
//     }

//     return response.data.url; // Pastikan server mengembalikan data yang tepat
//   } catch (error: any) {
//     console.error('Error during image upload:', error.message); // Log error jika terjadi
//     if (error.response) {
//       // Jika server merespons dengan status error
//       console.error('Error response from server:', error.response.data);
//     } else if (error.request) {
//       // Jika tidak ada respons dari server
//       console.error('No response received:', error.request);
//     } else {
//       // Jika kesalahan lain terjadi
//       console.error('Error message:', error.message);
//     }

//     return rejectWithValue('Failed to upload image');
//   }
// });

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

const uploadImageToSupabase = async (imageFile: File): Promise<string> => {
  try {
    console.log('Starting image upload...');
    console.log('Image file details:', {
      name: imageFile.name,
      type: imageFile.type,
      size: imageFile.size,
    });

    const formData = new FormData();
    formData.append('file', imageFile);

    // Log FormData (gunakan iterator untuk melihat konten FormData)
    console.log('FormData contents:');
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    // Endpoint untuk upload file ke Supabase
    const url = `https://gyxztnnnudumbvwqkjkf.supabase.co/storage/v1/object/product-images/${imageFile.name}`;
    console.log(url);
    console.log('Supabase Anon Key:', process.env.SUPABASE_ANON_KEY);
    const uploadResponse = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
      },
    });

    console.log('Server response:', uploadResponse);

    if (!uploadResponse.data || !uploadResponse.data.publicUrl) {
      console.error('Error: Public URL not found in response');
      throw new Error('Gagal mengunggah gambar: URL publik tidak ditemukan');
    }

    console.log('Image uploaded successfully. Public URL:', uploadResponse.data.publicUrl);
    return uploadResponse.data.publicUrl;
  } catch (error: any) {
    // Log detail error
    console.error('Error during image upload:', {
      message: error.message,
      response: error.response ? error.response.data : null,
      request: error.request || null,
    });

    // Lempar error agar ditangkap oleh pemanggil
    throw new Error(error.response?.data || 'Gagal mengunggah gambar');
  }
};

export const createProduct = createAsyncThunk<Product, { product: Product; imageFile: File | null }>('products/createProduct', async ({ product, imageFile }, { rejectWithValue }) => {
  try {
    let imageUrl = '';

    // Jika ada file gambar, unggah ke Supabase atau backend
    if (imageFile) {
      imageUrl = await uploadImageToSupabase(imageFile);
    }

    // Validasi URL gambar
    if (imageFile && !imageUrl) {
      throw new Error('Gagal mendapatkan URL gambar');
    }

    // Tambahkan URL gambar ke objek produk
    const newProduct = { ...product, imageUrl };

    // Kirim data produk ke backend
    const response = await axios.post('http://localhost:3001/api/products', newProduct);

    return response.data; // Data produk yang berhasil disimpan
  } catch (error: any) {
    console.error('Error creating product:', error.message);
    return rejectWithValue(error.response?.data || 'Gagal menambahkan produk');
  }
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
        state.error = (action.payload as string) || action.error.message || 'Failed to save product';
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
