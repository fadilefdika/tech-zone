import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/types';

const API_URL = 'http://localhost:3001/api/products';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => '/',
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/${id}`,
    }),
    createProduct: builder.mutation<Product, { product: Product; imageFile: File | null }>({
      query: ({ product, imageFile }) => {
        const formData = new FormData();
        if (imageFile) {
          formData.append('file', imageFile);
        }
        formData.append('product', JSON.stringify(product));

        return {
          url: '/',
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
      },
    }),
    updateProduct: builder.mutation<Product, { product: Product; productId: string }>({
      query: ({ product, productId }) => ({
        url: `/${productId}`,
        method: 'PUT',
        body: product,
      }),
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (productId) => ({
        url: `/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchProductsQuery, useGetProductByIdQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;
