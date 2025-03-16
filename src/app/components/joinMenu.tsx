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
import { userProfile } from "../Types/Interfaces";

const JoinMenu = () => {
  const [userProfile, setUserProfile] = useState<userProfile>();
  const router = useRouter();

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
    console.log(`dispatch value : ${player1Name}`)
    const jsonPayload = JSON.parse(payload.body);
    thisRoomId = jsonPayload.roomId;
    dispatch(setPlayer1(jsonPayload.player1));
    dispatch(setPlayer2(jsonPayload.player2));
    dispatch(setRoomId(jsonPayload.roomId));
    dispatch(setSpectatorCount(jsonPayload.spectatorCount));
  };

  const handlePlayer1Click = () =>{
    sendMessage("/gameRoom/updatePlayer1Name",{
      playerName : player1Name
    })
  }
  const handlePlayer1Change = (event:React.ChangeEvent<HTMLInputElement>) =>{
    dispatch(setPlayer1(event.target.value));
  }

  const handleStart = () => {
    alert("Game is starting !!");
    router.push("/player_agreement");
  };
  return (
    <div className="text-sm text-outline-mini text-white w-[18.75rem] h-[28.125rem] bg-white border border-black border-b-2">
      <div className="text-left flex flex-col gap-2 mx-5 my-2 mt-4">
        <div>
          <div>Player1</div>
          <GameTextWithJoin
            data={player1Name ? player1Name : ""}
            disable={userProfile?.name === player1Name}
            length="w-[15.688em]"
            handleChange={handlePlayer1Change}
            handleClick={handlePlayer1Click}
          />
        </div>
        <div>
          <div>Player2</div>
          <GameTextWithJoin
            // data={player2Name ? player2Name : ""}
            disable={userProfile?.name === player2Name}
            length="w-[15.688em]"
          />
        </div>
        <div>
          <div>Spectator</div>
          <div className="pt-2 flex flex-col border border-b-2 border-black w-[15.688rem] h-[14.1563rem] bg-secondary">
            <ul className="pl-2 flex-grow">
              {/* <li>spectator 1</li>
              <li>spectator 2</li>
              <li>spectator 3</li> */}
            </ul>
            <div className="flex justify-end">
              <JoinButton />
            </div>
          </div>
          <div className="text-center mt-2 ">
            <GameButton title="Start" handleClick={handleStart}></GameButton>
            <div className="mt-2 flex gap-2 flex-row justify-center">
              <GameCheckButton></GameCheckButton>
              <GameCheckButton></GameCheckButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMenu;
