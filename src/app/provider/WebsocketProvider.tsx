
'use client'
import { useEffect } from "react";
import { useWebSocket } from "../hooks/useWebsocket";

export default function WebSocketProvider({children}:{children:React.ReactNode}) {
  const {connect , subscribe} = useWebSocket();
  useEffect(() =>{
    connect();
    subscribe("/agreement/minion", (message) => {
      console.log("Received update:", JSON.parse(message.body));
    });
  },[])

  return (

    <>{children}</>
  );
}
