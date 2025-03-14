"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGameStatus, setMode } from "./stores/slices/gameSettingSlice";
import { useWebSocket } from "./hooks/useWebsocket";
import { IMessage, Message } from "@stomp/stompjs";
import { gameStatus, gameMode } from "./Types/type";
import { useRouter, usePathname } from "next/navigation";

const template = ({ children }: { children: React.ReactNode }) => {
  const mode = useSelector((state: any) => {
    state.gameSetting.mode;
  });
  const gameSetting = useSelector((state: any) => {
    state.gameSetting.gameSetting;
  });
  const { connect, subscribe } = useWebSocket();
  const dispatch = useDispatch();
  const router = useRouter();
  const currentPath = usePathname();
  useEffect(() => {
    connect();
    subscribe("/setting", (payload: IMessage) => {
      console.log(payload.body);
      const jsonPayload = JSON.parse(payload.body);
      const currentGameStatus = jsonPayload.gameStatus;
      const currentMode = jsonPayload.mode;

      console.log(currentGameStatus);
      console.log(currentMode);

      dispatch(setGameStatus(currentGameStatus));
      dispatch(setMode(currentMode));
      if (currentGameStatus == "modeSelect") {
        if (currentPath != "/menu" && currentPath != "/mode") {
          alert("Game hasn't started yet. Redirect to menu page.");
          router.push("/menu");
        }
      } else if (currentGameStatus == "playerJoin") {
        if(currentPath != ("/mode/duel") && currentMode != ("/mode/solitaire") && currentPath != "/player_agreement"){
          if (currentMode == "auto") {
            alert("Game has started in auto mode.");
            router.push("/player_agreement");
          } else {
            router.push("/mode/" + currentMode);
          }
        }
      } else if (currentGameStatus == "minionAgreement") {
        if (currentPath != "/player_agreement") {
          alert("Game is starting soon. Wait for players to agree on minions.");
          router.push("/player_agreement");
        }
      } else if (currentGameStatus == "gameOn") {
        if (currentPath != "/board_game") {
          alert("Game is starting!");
          router.push("/board_game");
        }
      }
    });
  }, []);

  return <>{children}</>;
};

export default template;
