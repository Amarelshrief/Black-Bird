import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  rate: number;
  category: string;
  image: {
    url: string;
  };
}

export interface Products {
  products: Product[];
}

const initialState: Products = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const product = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = product;
    },
    resetCart: (state) => {
      state.products = [];
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product!.quantity === 1) {
        product!.quantity = 1;
      } else {
        product!.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;
