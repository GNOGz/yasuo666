import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { hex } from '@/app/Types/Interfaces';
const initialState = {
    board: [] as hex[][],
}

export const boardSlice = createSlice({
    name:'board',
    initialState:initialState,
    reducers:{
        setBoard: (state ,action: PayloadAction<hex[][]>) =>{
            state.board = action.payload;
        }
    }
})

export const {setBoard} = boardSlice.actions;
export default boardSlice.reducer;