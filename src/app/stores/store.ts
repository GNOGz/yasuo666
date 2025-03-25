import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import agreementFieldReducer from './slices/agreementFieldSlice';
import websocketReducer from './slices/websocketSlice';
import gameSettingReducer from './slices/gameSettingSlice';
import playerProfileReducer from './slices/playerProfileSlice';
import roomDataSliceReducer from './slices/roomDataSlice';

import setBoardReducer from "./slices/boardSlice";
import selecterHexMinionReducer from "./slices/selecterHexMinion";
import mainGameDataReducer from './slices/mainGameDataSlice'

 const store = configureStore({
    reducer:{
        counter:counterReducer,
        agreementField:agreementFieldReducer,
        websocket:websocketReducer,
        gameSetting:gameSettingReducer,
        playerProfile:playerProfileReducer,
        roomData:roomDataSliceReducer,
        board:setBoardReducer,
        selecterHexMinion:selecterHexMinionReducer,
        mainGameData:mainGameDataReducer,
    },
    middleware :(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    })
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
