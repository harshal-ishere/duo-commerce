import {createSlice} from "@reduxjs/toolkit";
type initialStateType=boolean;
const initialState:initialStateType=false;
export const toggle2=createSlice({
    name:'switch',
    initialState,
    reducers:{
        counter2:state=>!state
    }
});

export let {counter2} = toggle2.actions;
export default toggle2.reducer;