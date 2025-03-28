"use client";
import { Irish_Grover } from "next/font/google";
import type { Metadata } from "next";
import { useSession, SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";
import  store  from "./stores/store";
import { Provider } from "react-redux";
import WebSocketProvider from "./provider/WebsocketProvider";
import { gameSetting } from "./Types/Interfaces";
import { useSelector,useDispatch } from "react-redux";
import { setGameStatus,setMode } from "./stores/slices/gameSettingSlice";
import { useWebSocket } from "./hooks/useWebsocket";

const mainFont = Irish_Grover({
  weight: ["400"],
  subsets: [],
});

// export const metadata: Metadata = {
//   title: "KOMBAT",
//   description: "KOMBAT Game in Yasuo theme.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const gameStatus = useSelector((state: any) => state.gameSetting.gameStatus);
  // const mode = useSelector((state: any) => state.gameSetting.mode);
  // const {connect ,subscribe} = useWebSocket();
  
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/menu")
  // }, []);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Yasuo1.svg" />
        <title>KOMBAT</title>
      </head>
      <body
        className={`${mainFont.className} text-white overflow-y-hidden overflow-x-hidden`}
      >
        <Provider store={store}>
          <WebSocketProvider>{children}</WebSocketProvider>
        </Provider>
      </body>
    </html>
  );
}
