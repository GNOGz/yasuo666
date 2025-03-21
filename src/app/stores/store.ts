import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import agreementFieldReducer from './slices/agreementFieldSlice';
import websocketReducer from './slices/websocketSlice';
import gameSettingReducer from './slices/gameSettingSlice';
import playerProfileReducer from './slices/playerProfileSlice';
import roomDataSliceReducer from './slices/roomDataSlice';

 const store = configureStore({
    reducer:{
        counter:counterReducer,
        agreementField:agreementFieldReducer,
        websocket:websocketReducer,
        gameSetting:gameSettingReducer,
        playerProfile:playerProfileReducer,
        roomData:roomDataSliceReducer
    },
    middleware :(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    })
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
