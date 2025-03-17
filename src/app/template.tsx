"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGameStatus, setMode } from "./stores/slices/gameSettingSlice";
import { useWebSocket } from "./hooks/useWebsocket";
import { IMessage, Message } from "@stomp/stompjs";
import { gameStatus, gameMode } from "./Types/type";
import { useRouter, usePathname } from "next/navigation";
import { PlayerProfileInterface,RoomID } from "./Types/Interfaces";
import api from "./libs/api";
import { setRole, setRoomId,selectUserName, selectRole, setUserName } from "./stores/slices/playerProfileSlice";
import { setName } from "./stores/slices/agreementFieldSlice";
import { useAppSelector } from "./stores/hook";
import { RootState } from "./stores/store";

const template = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  //local storage related function here
  // const roomId = useSelector((state:RootState)=>{state.playerProfile.roomId})
  const roomId = useAppSelector(selectUserName);
  const playerRole = useAppSelector(selectRole);
  const playerName = useAppSelector(selectUserName);

  const checkRoomId = async () => {
    const storedData = localStorage.getItem("userProfile");
    const playerProfile: PlayerProfileInterface | null = storedData ? JSON.parse(storedData) : null;
    console.log(playerProfile)

    try{
      const response = await api.get("/roomId");
      const parsedResponse = JSON.stringify((response.data))
      console.log(`current roomId : ${parsedResponse}`)
      if( !playerProfile ||(playerProfile.roomId !== response.data.roomId)){
        //this IF checks if room id match the current game.
        console.log("room id doesn't match. reset user profile")
        dispatch(setRoomId(response.data.roomId));
        dispatch(setUserName(""));
        dispatch(setRole(null));
        const dataToStored:PlayerProfileInterface = {
          userName:null,
          role:null,
          roomId : response.data.roomId
        }
        localStorage.setItem("userProfile",JSON.stringify(dataToStored));
      }
      else{
        //IF room id matches.Fetch local storage and set dispatch.
        dispatch(setUserName(playerProfile.userName));
        dispatch(setRoomId(playerProfile.roomId));
        dispatch(setRole(playerProfile.role));
      }
    }
    catch(err){
      alert(err);
    }
  };

  //ws connect and check room status below
  const mode = useSelector((state: any) => {
    state.gameSetting.mode;
  });
  const gameSetting = useSelector((state: any) => {
    state.gameSetting.gameSetting;
  });
  const { connect, subscribe } = useWebSocket();
  const router = useRouter();
  const currentPath = usePathname();
  useEffect(() => {
    //check user profile first
    checkRoomId();
    //ws below
    connect();
    subscribe("/setting", (payload: IMessage) => {
      console.log("recived from setting : \n" + payload.body);
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
        if (
          currentPath != "/mode/duel" &&
          currentMode != "/mode/solitaire" &&
          currentPath != "/player_agreement"
        ) {
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

  return <>
  {children}
  </>;
};

export default template;
