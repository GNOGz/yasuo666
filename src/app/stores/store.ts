import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import agreementFieldReducer from './slices/agreementFieldSlice';
import websocketReducer from './slices/websocketSlice'
import gameSettingReducer from './slices/gameSettingSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        agreementField:agreementFieldReducer,
        websocket:websocketReducer,
        gameSetting:gameSettingReducer
    },
    middleware :(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    })
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
