import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

export interface RoomDataInterface{
    roomId:string | null,
    player1:String | null,
    player2:String | null,
    spectatorCount:number
}
const initialState:RoomDataInterface = {
    roomId:null,
    player1:null,
    player2:null,
    spectatorCount:0
}

export const roomDataSlice = createSlice({
    name:'roomData',
    initialState:initialState,
    reducers:{
        setRoomId:(state,action:PayloadAction<string>) =>{
            state.roomId = action.payload;
        },
        setPlayer1:(state,action:PayloadAction<string>) =>{
            state.player1 = action.payload;
        },
        setPlayer2:(state,action:PayloadAction<string>) =>{
            state.player2 = action.payload;
        },        
        setSpectatorCount:(state,action:PayloadAction<number>)=>{
            state.spectatorCount = action.payload;
        },
        setRoomData:(state,action:PayloadAction<RoomDataInterface>)=>{
            state = action.payload
        }
    }
})

export const {setRoomId,setPlayer1,setPlayer2,setRoomData,setSpectatorCount} = roomDataSlice.actions;
export default roomDataSlice.reducer;