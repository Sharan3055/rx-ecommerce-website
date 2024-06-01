import { createSlice } from "@reduxjs/toolkit";

const wishList = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishList(state, action) {
      let dataAlreadExists = state.filter(
        (curElm) => curElm.id == action.payload.id
      );
      //checking if product already exists dont add
      if (dataAlreadExists.length == 0) {
        state.push(action.payload);
      }
    },
    removeFromWhishList(state, action) {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addToWishList, removeFromWhishList } = wishList.actions;
export default wishList.reducer;
