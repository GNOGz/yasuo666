import {RootState} from '../store'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerProfileInterface } from '@/app/Types/Interfaces';

const initialState:PlayerProfileInterface = {
    userName : null,
    role : null,
    roomId:null ,
}

export const playerProfile = createSlice({
    name:'playerProfile',
    initialState:initialState,
    reducers:{
        
        setUserName:(state,action:PayloadAction<string | null | undefined>)=>{
            state.userName = action.payload;
        } ,
        setRole:(state,action:PayloadAction<string | null | undefined>) =>{
           state.role = action.payload;
        },
        setRoomId:(state,action:PayloadAction<string | null | undefined>)=>{
            state.roomId = action.payload;
        },

    }
})

export const {setUserName,setRole,setRoomId} = playerProfile.actions;
export const selectUserName = (state:RootState) => state.playerProfile.userName;
export const selectRole = (state:RootState) => state.playerProfile.role;
export const selectRoomId = (state:RootState) => state.playerProfile.roomId;

export default playerProfile.reducer;