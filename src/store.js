import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ecommerce/cart/cartSlice"
export const store = configureStore({
    reducer:{
        addtocart : cartReducer
    },
})