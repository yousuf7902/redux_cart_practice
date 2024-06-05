import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/cartSlice";
import CartBtnReducer from "../features/cartBtnSlice";
 "./"

const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        cartBtn: CartBtnReducer,
    },
});


export default store;