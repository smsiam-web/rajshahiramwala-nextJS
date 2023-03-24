import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1001,
      name: "গোপালভোগ আম",
      rating: "4.7",
      image: "gopalvhog_1.jpeg",
      category: "আম",
      price: 85,
      oldPrice: 115,
      stock: true,
    },
    {
      id: 1002,
      name: "হিমসাগর আম",
      rating: "4.7",
      image: "himsagor_1.jpeg",
      category: "আম",
      price: 90,
      stock: true,
    },
    {
      id: 1003,
      name: "আম্রপালি আম",
      rating: "4.7",
      image: "amropali_1.jpg",
      category: "আম",
      oldPrice: 120,
      price: 115,
      stock: false,
    },
    {
      id: 1004,
      name: "গোপালভোগ আম",
      rating: "4.7",
      image: "gopalvhog_1.jpeg",
      category: "আম",
      price: 85,
      oldPrice: 115,
      stock: true,
    },
    {
      id: 1005,
      name: "হিমসাগর আম",
      rating: "4.7",
      image: "himsagor_1.jpeg",
      category: "আম",
      price: 90,
      stock: true,
    },
    {
      id: 1006,
      name: "আম্রপালি আম",
      rating: "4.7",
      image: "amropali_1.jpg",
      category: "আম",
      oldPrice: 120,
      price: 115,
      stock: false,
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // updateBasket: (state, action) => {
    //   state.items = action.payload;
    // },
    // addItem: (state, action) => {
    //   state.items = [action.payload, ...state.items];
    // },
    // removeItem: (state, action) => {
    //   state.items = state.items.filter((x) => x.id !== action.payload);
    // },
    // increaseItemQuantity: (state, action) => {
    //   state.items = state.items.map((item) => {
    //     if (item.id !== action.payload) return item;
    //     return {
    //       ...item,
    //       quantity: item.quantity + 1,
    //     };
    //   });
    // },
    // decreaseItemQuantity: (state, action) => {
    //   state.items = state.items
    //     .map((item) => {
    //       if (item.id !== action.payload) return item;
    //       if (item.quantity === 1) return false;
    //       return {
    //         ...item,
    //         quantity: item.quantity - 1,
    //       };
    //     })
    //     .filter((x) => x !== false);
    // },
  },
});

// export const {
//   updateBasket,
//   addItem,
//   removeItem,
//   increaseItemQuantity,
//   decreaseItemQuantity,
// } = basketSlice.actions;

export const selectProduct = (state) => state.product.items;
// export const selectTotalPrice = (state) =>
//   state.basket.items
//     .map((x) => x.price * x.quantity)
//     .reduce((a, b) => a + b, 0);
// export const selectTotalCartItems = (state) =>
//   state.basket.items.map((x) => x.quantity).reduce((a, b) => a + b, 0);

export default productSlice.reducer;
