import { configureStore } from '@reduxjs/toolkit';
import listSlice from './listSlice';


const store = configureStore({
    reducer: {
      list: listSlice.reducer,
    },
  });
  
  
  export default store;