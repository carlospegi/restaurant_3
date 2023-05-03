import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import CartSlice from "./cartSlice";

const Store = configureStore({
  reducer: {
    
    auth: AuthSlice.reducer ,// sin reducer
    cart: CartSlice.reducer,

},
});

export default Store;
