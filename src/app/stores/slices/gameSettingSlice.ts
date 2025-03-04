import { createSlice } from "@reduxjs/toolkit";
import { gameSetting } from "@/app/Types/Interfaces";
import { gameMode,gameStatus } from "@/app/Types/type";
const initialState : gameSetting = {
    mode : gameMode.Duel,
    gameStatus : gameStatus.Start
}

export const counterSLice = createSlice({
    name:'gameSetting',
    initialState:initialState,
    reducers:{
        setGameStatus:(state)=>{
            state.gameStatus += 1
        }  ,
        setMode : (state) =>{
            state.mode -= 1
        },
    }
})

export const {setGameStatus,setMode} = counterSLice.actions;
export default counterSLice.reducer;