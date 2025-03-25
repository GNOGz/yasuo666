"use client";
import GameButton from "./GameButton";
import GameTextWithJoin from "./GameTextWithJoin";
import JoinButton from "./JoinButton";
import { useRouter } from "next/navigation";
import GameCheckButton from "./GameCheckbox";
import { useWebSocket } from "../hooks/useWebsocket";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlayer1,
  setPlayer2,
  setRoomData,
  setRoomId,
  setSpectatorCount,
} from "../stores/slices/roomDataSlice";
import { useAppSelector } from "../stores/hook";
import { useEffect, useState } from "react";
import { IMessage } from "@stomp/stompjs";
import { PlayerProfileInterface, userProfile } from "../Types/Interfaces";
import {
  selectRole,
  selectRoomId,
  selectUserName,
  setRole,
  setUserName,
} from "../stores/slices/playerProfileSlice";

const JoinMenu = ({solitaire}: { solitaire: boolean }) => {
  const [userProfile, setUserProfile] = useState<userProfile>();
  const [player1Exist, setPlayer1Exist] = useState<boolean>(false);
  const [player2Exist, setPlayer2Exist] = useState<boolean>(false);

  const router = useRouter();
  const thisPlayerName = useAppSelector(selectUserName);
  const roomId = useAppSelector(selectRoomId);
  const thisUserRole = useAppSelector(selectRole);

  const player1Name = useSelector((state: any) => state.roomData.player1);
  const player2Name = useSelector((state: any) => state.roomData.player2);
  const spectatorCount = useSelector(
    (state: any) => state.roomData.spectatorCount
  );

  const dispatch = useDispatch();
  const { subscribe, sendMessage } = useWebSocket();
  let thisRoomId: string;
  useEffect(() => {
    subscribe("/room", (payload: IMessage) => {
      console.log("payload from room : \n" + payload.body);
      onRoomDataChange(payload);
    });
  }, []);

  const onRoomDataChange = (payload: IMessage) => {
    console.log(`received payload :  ${payload.body}`);
    console.log(`dispatch value : ${player1Name}`);
    const jsonPayload = JSON.parse(payload.body);
    thisRoomId = jsonPayload.roomId;
    if (jsonPayload.player1) setPlayer1Exist(true);
    if (jsonPayload.player2) setPlayer2Exist(true);
    dispatch(setPlayer1(jsonPayload.player1));
    dispatch(setPlayer2(jsonPayload.player2));
    dispatch(setRoomId(jsonPayload.roomId));
    dispatch(setSpectatorCount(jsonPayload.spectatorCount));
  };

  const handlePlayer1Click = () => {
    if (!player1Name) {
      alert("Please enter name before join");
      return;
    }
    sendMessage("/gameRoom/updatePlayer1Name", {
      playerName: player1Name,
    });
    updatePlayerProfile(player1Name, "player1");
  };
  const handlePlayer2Click = () => {
    if (!player2Name) {
      alert("Please enter name before join");
      return;
    }
    sendMessage("/gameRoom/updatePlayer2Name", {
      playerName: player2Name,
    });
    updatePlayerProfile(player2Name, "player2");
  };
  const handlePlayer1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPlayer1(event.target.value));
  };
  const handlePlayer2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPlayer2(event.target.value));
  };

  const handleSpectatorClick = () => {
    updatePlayerProfile(`spectator-${spectatorCount + 1}`, "spectator");
    sendMessage("/gameRoom/addSpectator", null);
  };

  const handleStart = () => {
    sendMessage("/gameSetting/setGameSetting",{
      mode:solitaire?"solitaire":"duel",
      gameStatus:"playerJoin",
    })      
    alert("Game is starting !!");
      router.push("/player_agreement");
    
  };
  const updatePlayerProfile = (name: string, role: string) => {
    dispatch(setUserName(name));
    dispatch(setRole(role));
    const dataToStore: PlayerProfileInterface = {
      userName: name,
      role: role,
      roomId: roomId,
    };
    localStorage.setItem("userProfile", JSON.stringify(dataToStore));
  };
  const spectatorList: string[] = [];
  for (let i = 0; i < spectatorCount; i++) {
    spectatorList.push(`spectator-${i + 1}`);
  }
  return (
    <div className="text-sm text-outline-mini text-white w-[18.75rem] h-[28.125rem] bg-white border border-black border-b-2">
      <div className="text-left flex flex-col gap-2 mx-5 my-2 mt-4">
        <div>
          <div>Player1</div>
          <GameTextWithJoin
            data={
              player1Name
                ? player1Name + (player1Name === thisPlayerName ? "(YOU)" : "")
                : ""
            }
            disable={player1Exist || thisUserRole !== null}
            length="w-[15.688em]"
            handleChange={handlePlayer1Change}
            handleClick={handlePlayer1Click}
          />
        </div>
        <div>
          <div>Player2</div>
          <GameTextWithJoin
            data={
              player2Name
                ? player2Name + (player2Name === thisPlayerName ? "(YOU)" : "")
                : ""
            }
            disable={
              solitaire ||
              player2Exist ||
              thisUserRole !== null
            }
            length="w-[15.688em]"
            handleChange={handlePlayer2Change}
            handleClick={handlePlayer2Click}
          />
        </div>
        <div>
          <div>Spectator</div>
          <div className="pt-2 flex flex-col border border-b-2 border-black w-[15.688rem] h-[14.1563rem] bg-secondary">
            <ul className="pl-2 flex-grow overflow-auto">
              {spectatorList.map((spectator, index) => (
                <li key={index}>
                  {spectator + (thisPlayerName === spectator ? "(YOU)" : "")}
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <JoinButton
                disable={thisUserRole != null}
                handleClick={handleSpectatorClick}
              />
            </div>
          </div>
          <div className="text-center mt-2 ">
            <GameButton
              disable={!(player1Exist&&player1Exist) || ( thisUserRole !== "player1" && thisUserRole !== "player2")}
              title="Start"
              handleClick={handleStart}
            ></GameButton>
            { !solitaire &&
              <div className="mt-2 flex gap-2 flex-row justify-center">
                <GameCheckButton></GameCheckButton>
                <GameCheckButton></GameCheckButton>
              </div>
            }
            <div>
              <h1 className="text-red-500">{thisPlayerName}</h1>
              <h1 className="text-red-500">{roomId}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMenu;
