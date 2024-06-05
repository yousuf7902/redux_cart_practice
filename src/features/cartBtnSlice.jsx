import { createSlice } from "@reduxjs/toolkit";

const cartBtnSlice = createSlice({
    name: "cartBtn",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existItem.quantity++;
                existItem.totalPrice = existItem.totalPrice + existItem.price;
            }
        },
        removeItemToCart(state, action) {
            const id = action.payload;
            const existItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existItem.quantity--;
                existItem.totalPrice = existItem.totalPrice - existItem.price;
            }
        },
    },
});

export default cartBtnSlice.reducer;
export const { addItemToCart, removeItemToCart } = cartBtnSlice.actions;
