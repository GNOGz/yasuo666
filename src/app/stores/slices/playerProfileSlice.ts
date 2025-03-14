
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name : "spectator-1"
}

export const playerProfile = createSlice({
    name:'playerProfile',
    initialState:initialState,
    reducers:{
        setName:(state,action:PayloadAction<string>)=>{
            state.name = action.payload;
        } ,
    }
})

export const {setName} = playerProfile.actions;
export default playerProfile.reducer;