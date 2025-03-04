import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "@stomp/stompjs"; // Client still imported but not used directly in state
import { RootState } from "../store";

interface WebSocketState {
  client:Client | null,
  isConnected: boolean;
}

const initialState: WebSocketState = {
  client: null, 
  isConnected: false,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    setWebSocketClientState: (state, action: PayloadAction<WebSocketState>) => {
      state.client = action.payload.client;
      state.isConnected = action.payload.isConnected;
    },
    setConnectionStatus: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setClient: (state, action: PayloadAction<Client | null>) => {
      state.client = action.payload;
    },
  },
});

export const { setWebSocketClientState, setConnectionStatus,setClient } = websocketSlice.actions;
export const selectWebsocket = (state: RootState) => state.websocket;
export default websocketSlice.reducer;
