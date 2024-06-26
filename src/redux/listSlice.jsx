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
      product.units > 1 ? (product.units -= 1) : state;
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    addProduct: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        units: action.payload.units,
        timestamp: action.payload.timestamp,
      });
    },
  },
});

export const {
  increaseProduct,
  decreaseProduct,
  deleteProduct,
  addProduct,
  toggleBought,
} = listSlice.actions;
export default listSlice;
