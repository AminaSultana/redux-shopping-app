import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    showCart(state) {
      state.show = !state.show;
    },
    addItems(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      console.log("newitem", newItem);
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      console.log(existingItem);
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          description: newItem.description,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItems(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const item = state.cartItems.find((item) => item.id === id);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
