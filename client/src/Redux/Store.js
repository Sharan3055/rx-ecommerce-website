import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import WishList from "./WishList";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    list: WishList,
  },
});

export default store;
