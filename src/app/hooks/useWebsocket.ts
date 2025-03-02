import { useDispatch } from "react-redux";
import { Stomp, IMessage, StompSubscription, Client } from "@stomp/stompjs";
import {
  selectWebsocket,
  setConnectionStatus,
  setWebSocketClient,
} from "@/app/stores/slices/websocketSlice";
import { useAppSelector } from "@/app/stores/hook";
import { setField } from "../stores/slices/agreementFieldSlice";

export const useWebSocket = () => {
  const dispatch = useDispatch();
  const { client, isConnected } = useAppSelector(selectWebsocket);
  const serverUrl = process.env.API_BASE_URL;

  const subscribe = (
    destination: string,
    callback: (payload: IMessage) => void
  ) => {
    if (client && isConnected) {
      const subscription = client.subscribe(destination, callback);
      console.log(`Subscribed to ${destination}`);
      return subscription;
    } else {
      console.log("No active WebSocket connection to disconnect.");
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
      let stompClient = new Client({
        brokerURL: "ws://localhost:8080/ws",
        onConnect: () => {
          console.log("Connected to WebSocket");
          stompClient.subscribe("/agreement/minion", (message) => {
            if (message.body) {
              console.log("Payload update");
              console.log(message.body);
            }
          });
        },
        onStompError: (frame) => {
          console.error("WebSocket Error:", frame);
        },
      });

      stompClient.activate();

      return () => {
        stompClient.deactivate();
      };
    } catch (e) {
      console.log(e);
    }
  };

  const disconnect = () => {
    if (client && isConnected) {
      client.deactivate().then(() => {
        dispatch(setWebSocketClient(null));
        dispatch(setConnectionStatus(false));
        console.log("WebSocket disconnected");
      });
    } else {
      console.log("No active WebSocket connection to disconnect.");
    }
  };

  const onConnected = (stompClient: Client) => {
    stompClient.subscribe(`/agreement/minion`, onUpdateAgreement);
    dispatch(setWebSocketClient(stompClient));
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
