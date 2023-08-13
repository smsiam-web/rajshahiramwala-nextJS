import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrder: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { updateOrder } = orderSlice.actions;
export const selectOrder = (state) => state.orders.items;

export default orderSlice.reducer;
