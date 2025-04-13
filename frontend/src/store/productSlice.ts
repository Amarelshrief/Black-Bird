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

export interface CounterState {
  products: Product[];
}

const initialState: CounterState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
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
