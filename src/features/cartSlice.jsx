import { createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cartToggle",
    initialState: {isShow: false, isEmpty:false},
    reducers:{
        toggle(state){
            state.isShow=!state.isShow;
        }
    }
});

export const {toggle} = cartSlice.actions;
export default cartSlice.reducer;