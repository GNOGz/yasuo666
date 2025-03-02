
'use client'
import { useEffect } from "react";
import { useWebSocket } from "../hooks/useWebsocket";

export default function WebSocketProvider({children}:{children:React.ReactNode}) {
  const {connect} = useWebSocket();
  useEffect(() =>{
    connect();
  },[])

  return (

    <>{children}</>
  );
}
