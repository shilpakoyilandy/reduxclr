import { createSlice } from "@reduxjs/toolkit";
const initialStatevalue=" "
export const themeSlice=createSlice({
    name:"theme",
    initialState:{value:initialStatevalue},
    reducers:{
        colorChange:(state,action)=>{
            state.value=action.payload;
        }
    }
})
export const {colorChange}=themeSlice.actions
export default themeSlice.reducer;
