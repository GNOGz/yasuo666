import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { selecterHexMinion } from "@/app/Types/Interfaces";


const initialState:selecterHexMinion = {
    selectMinion: 0,
    selectHex: -1
};

const selecterHexMinionslice = createSlice({
  name: "selecterHexMinion",
  initialState,
  reducers: {
    setSelectMinion: (state, action: PayloadAction<number>) => {
      state.selectMinion = action.payload;
    },
    setSelectHex: (state, action: PayloadAction<number>) => {
      state.selectHex = action.payload;
    },
    
  },
});

export const { setSelectMinion, setSelectHex } = selecterHexMinionslice.actions;
export const selectHex = (state:RootState) => state.selecterHexMinion.selectHex;
export const selectMinion = (state:RootState) => state.selecterHexMinion.selectMinion;
export default selecterHexMinionslice.reducer;
