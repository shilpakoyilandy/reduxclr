import { createSlice } from "@reduxjs/toolkit";
const initialStatevalue={}
export const userSlice=createSlice({
    name:"user",
    initialState:{value:initialStatevalue},
 reducers:{
     login:(state,action)=>{
    state.value=action.payload;
},
  logout:(state,action)=>{
      state.value=initialStatevalue
  }
}
});

export const {login}=userSlice.actions
export const {logout}=userSlice.actions

export default userSlice.reducer
