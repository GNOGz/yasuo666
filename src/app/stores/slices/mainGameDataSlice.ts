import {RootState} from '../store'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hexDataProp } from '@/app/Types/Interfaces';
import { act } from 'react';

interface MainGameDataInterface{
    p1Budget:number | null | undefined,
    p2Budget:number | null | undefined,
    turnCount:number | null | undefined,
    hexProp:hexDataProp[][] | null | undefined,
    isGameOver:boolean | null | undefined,
    winner:string | null | undefined,
    currentPlayer:string | null | undefined,
}

const initialState:MainGameDataInterface = {
    p1Budget:0,
    p2Budget:0,
    turnCount:1,
    hexProp:null,
    isGameOver:false,
    winner:"",
    currentPlayer:"player1",
}

export const mainGameData = createSlice({
    name:'mainGameData',
    initialState:initialState,
    reducers:{
        setAllProp:(state,action:PayloadAction<MainGameDataInterface | null | undefined>)=>{
            if(action){
                state.p1Budget = action.payload?.p1Budget;
                state.p2Budget = action.payload?.p2Budget;
                state.turnCount = action.payload?.turnCount;
                state.hexProp = action.payload?.hexProp;
                state.isGameOver = action.payload?.isGameOver;
                state.winner = action.payload?.winner;
                state.currentPlayer = action.payload?.currentPlayer;
            }
        },
        setP1Budget:(state,action:PayloadAction<number | null | undefined>)=>{
            state.p1Budget = action.payload;
        } ,
        setP2Budget:(state,action:PayloadAction<number | null | undefined>)=>{
            state.p2Budget = action.payload;
        },
        setTurnCount:(state,action:PayloadAction<number | null | undefined>)=>{
            state.turnCount = action.payload;
        },
        setHexProp:(state,action:PayloadAction<hexDataProp[][] | null | undefined>)=>{
            state.hexProp = action.payload;
        },
        setIsGameOver:(state,action:PayloadAction<boolean | null | undefined>)=>{
            state.isGameOver = action.payload;
        },
        setWinner:(state,action:PayloadAction<string | null | undefined>)=>{
            state.winner = action.payload;
        },
        setCurrentPlayer:(state,action:PayloadAction<string | null | undefined>)=>{
            state.currentPlayer = action.payload;
        }

    }
})

export const {setAllProp,setP1Budget,setP2Budget,setTurnCount,setIsGameOver,setWinner,setCurrentPlayer} = mainGameData.actions;
export const selectP1Budget = (state:RootState) => state.mainGameData.p1Budget;
export const selectP2Budget = (state:RootState) => state.mainGameData.p2Budget;
export const selectTurnCount = (state:RootState) => state.mainGameData.turnCount;
export const selectHexProp = (state:RootState) => state.mainGameData.hexProp;
export const selectIsGameOver = (state:RootState) => state.mainGameData.isGameOver;
export const selectWinner = (state:RootState) => state.mainGameData.winner;
export const selectCurrentPlayer = (state:RootState) => state.mainGameData.currentPlayer;


export default mainGameData.reducer;