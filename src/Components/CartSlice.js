import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to store items in the cart
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          Price: newItem.price,
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.Price;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
