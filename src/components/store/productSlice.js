import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//slice dont know how to handle the asynchronous operation we have to create thunk action creaor. Thunk will handle as a middleware
import StatusCode from "../utils/StatusCode";
const initialState = {
  data: [],
  status:StatusCode.IDLE
};
//create the slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state,action) {
    //     state.data = action.payload
    // }
  },
  extraReducers: (builder) => {
    //we have 3 states for api call rejected,pending,fulfilled
    builder
    .addCase(getProducts.pending,(state,action)=>{
        state.status = StatusCode.LOADING
    })
    .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = StatusCode.IDLE
    })
    .addCase(getProducts.rejected,(state,action)=>{
        state.status=StatusCode.ERROR
    })
   
  },
});

// Export the reducer and action
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer; //automatically gives the reducer property which basically return reducer

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});
// ✅ Correct thunk action creator (no hooks here!)
// export function getProducts(){
//   return async function getProductsThunk(dispatch,getState){
//     //    const response = await fetch("https://fakestoreapi.com/products")
//     //     const result = await response.json()
//     //    dispatch(fetchProducts(result))
//     }
// }
