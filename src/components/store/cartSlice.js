//loat of boiler plate code for redux need to create actions,reducers and types lot of files with 
// redux toolkit we just need all in one and that is with the help of slice
//slice is a collection of redux reducer and actions for a single feature 
//slice function will autogenerate the action type and action creator based on the name of the reducer function you provide
//store will actually bring your actions and reducers together and hold the application stick.to craete a store we just need to use configurestore method of redux toolkit.
import {createSlice} from '@reduxjs/toolkit'
const initialState = [];
const cartSlice =  createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {add,remove} = cartSlice.actions 
export default cartSlice.reducer //automatically gives the reducer property which basically return reducer