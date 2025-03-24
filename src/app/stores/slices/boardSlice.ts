import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { hex } from '@/app/Types/Interfaces';



const genrateDummy = (): hex[][] => {
    const board: hex[][] = [];
  for (let i = 0; i < 8; i++) {
    const row: hex[] = [];
    for (let j = 0; j < 8; j++) {
      row.push({ own: 0, mm: 0, bt: false });
    }
    board.push(row);
  }
  return board;
}


interface mainGameInterface{
  board: hex[][]
}

const initialState = {
    board: genrateDummy() ,
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