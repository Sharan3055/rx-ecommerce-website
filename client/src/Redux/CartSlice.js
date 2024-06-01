import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      let dataAlreadExists = state.filter(
        (curElm) => curElm.id == action.payload.id
      );
      //checking if product already exists dont add
      if (dataAlreadExists.length == 0) {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
