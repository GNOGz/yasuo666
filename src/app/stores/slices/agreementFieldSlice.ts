import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Stomp } from "@stomp/stompjs";
import { act } from "react";
import { agreementFieldState } from "@/app/Types/Interfaces";

const initialState:agreementFieldState = {
    name:"",
    defense:0,
    strategy:"",
}

export const agreementFieldSlice = createSlice({
    name:'agreementField',
    initialState:initialState,
    reducers:{
        setField:(state,action: PayloadAction<agreementFieldState>)=>{
            state.name = action.payload.name;
            state.defense = action.payload.defense;
            state.strategy = action.payload.strategy;
        },
        setName:(state,action:PayloadAction<string>) =>{
            state.name = action.payload;
        },
        setDefense:(state,action:PayloadAction<number>) =>{
            state.defense = action.payload;
        },
        setStrategy:(state,action:PayloadAction<string>) =>{
            state.strategy = action.payload;
        },

    }
})

export const {setField,setName,setDefense,setStrategy} = agreementFieldSlice.actions;
export default agreementFieldSlice.reducer;