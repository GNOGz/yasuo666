import { useDispatch } from "react-redux";
import { Stomp, IMessage, StompSubscription, Client } from "@stomp/stompjs";
import {
  selectWebsocket,
  setClient,
  setConnectionStatus,
} from "@/app/stores/slices/websocketSlice";
import { setBoard } from "../stores/slices/boardSlice";
import { useAppSelector } from "@/app/stores/hook";
import { setField } from "../stores/slices/agreementFieldSlice";
import { useState } from "react";

export const useWebSocket = () => {
  const dispatch = useDispatch();
  const { isConnected, client } = useAppSelector(selectWebsocket);
  const serverUrl = process.env.API_BASE_URL;

  const subscribe = (
    destination: string,
    callback: (payload: IMessage) => void
  ) => {
    console.log("subscribing");
    if (client && isConnected) {
      const subscription = client.subscribe(destination, callback);
      console.log(`Subscribed to ${destination}`);
      return subscription;
    } else {
      console.log("No active WebSocket connection to disconnect.");
      console.log(client, isConnected);
    }
  };

  const unsubscribe = (subscription: StompSubscription | undefined) => {
    if (client && isConnected && subscription) {
      client.unsubscribe(subscription.id);
      console.log(`Unsubscribed from ${subscription.id}`);
    } else {
      console.log("No active WebSocket connection to disconnect.");
    }
  };

  const sendMessage = (destination: string, message: any) => {
    if (client && isConnected) {
      console.log("send", JSON.stringify(message));
      client.publish({
        destination: `/app${destination}`,
        body: JSON.stringify(message),
      });
    } else {
      console.log("No active WebSocket connection to disconnect.");
    }
  };

  const connect = () => {
    try {
      const stompClient = new Client({
        brokerURL: `ws://10.124.192.19:8080/ws`,
        debug: () => {},
        reconnectDelay: 1000,
        onConnect: () => {
          onConnected(stompClient);
        },
        onStompError: (frame) => console.error("STOMP Error:", frame),
      });

      stompClient.activate();
    } catch (e) {
      console.error("WebSocket Connection Error:", e);
    }
  };

  const disconnect = () => {
    if (client && isConnected) {
      client.deactivate().then(() => {
        dispatch(setConnectionStatus(false));
        console.log("WebSocket disconnected");
      });
    } else {
      console.log("No active WebSocket connection to disconnect.");
    }
  };

  const onConnected = (client: Client) => {
    subscribe("/mainGame", (payload: IMessage) => {
      console.log(`received payload :  ${payload.body}`);
      const jsonPayload = JSON.parse(payload.body);
      dispatch(setBoard(jsonPayload));
    });
    dispatch(setClient(client));
    dispatch(setConnectionStatus(true));
    console.log("WebSocket connected successfully");
  };

  const onUpdateAgreement = (payload: IMessage) => {
    const newMessageObject = JSON.parse(payload.body);
    dispatch(setField(newMessageObject));
    console.log(
      `recieve update minion setting from another player`,
      newMessageObject
    );
  };
  //   const onUpdateRoom = (payload: IMessage) => {
  //     const newMessageObject = JSON.parse(payload.body);
  //     dispatch(addMessageToRoom(newMessageObject));
  //     console.log("Receive new message object", newMessageObject);
  //   };

  return {
    connect,
    disconnect,
    sendMessage,
    subscribe,
    unsubscribe,
  };
};
