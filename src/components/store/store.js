
//store will actually bring your actions and reducers together and hold the application stick.
// to craete a store we just need to use configurestore method of redux toolkit.
//in configurestore thunk middleware is by defualt . we dont need to configure the middleware manually.
import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import cartSlice from './cartSlice';
 const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    }
 })
 export default store;