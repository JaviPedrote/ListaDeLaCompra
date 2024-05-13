import { createSlice } from "@reduxjs/toolkit";



const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    increaseProduct: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      product.units += 1;
      
    },
    decreaseProduct: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      product.units > 1 ? product.units -= 1 : state;  
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    addProduct: (state, action) => {
      state.push(action.payload); 
    },
  },
});

export const { increaseProduct, decreaseProduct, deleteProduct, addProduct } =
  listSlice.actions;
export default listSlice;
