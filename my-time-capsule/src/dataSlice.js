import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   DATA : JSON.parse(localStorage.getItem("DATA")) || []
} 

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDATA: (state, action) => { 
      // console.log(action.payload)
      state.DATA.push(action.payload) ;
      localStorage.setItem("DATA" , JSON.stringify(state.DATA));
    },
    deleteDATA: (state, action) => {
      state.DATA = state.DATA.filter((item) => item.title !== action.payload);
      localStorage.setItem("DATA", JSON.stringify(state.DATA));
    }
  },
});

export const { setDATA , deleteDATA } = dataSlice.actions;

export default dataSlice.reducer;
