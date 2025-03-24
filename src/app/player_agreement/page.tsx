"use client";
import TextArea from "../components/TextArea";
import GameTextInput from "../components/GameTextInput";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import GameButton from "../components/GameButton";
import GameCheckButton from "../components/GameCheckbox";
import { agreementProp } from "../Types/Interfaces";
import { useEffect } from "react";
import { Stomp, Client, Message, IMessage } from "@stomp/stompjs";
import { useDispatch, useSelector } from "react-redux";
import {
  setDefense,
  setName,
  setStrategy,
} from "../stores/slices/agreementFieldSlice";
import { useState } from "react";
import { useWebSocket } from "../hooks/useWebsocket";
import { useAppSelector } from "../stores/hook";
import { selectWebsocket } from "../stores/slices/websocketSlice";
import MenuButton from "../components/MenuButton";
import AgreementButton from "../components/AgreementButton";
import GameButtonSM from "../components/GameButtonSM";
import { Hexagon,Hexfreame } from "../components/Hexagon";
import PlayerChooseNumber from "../components/PlayerChooseNumber";
const font = JetBrains_Mono({
  weight: ["400"],
  subsets: [],
});
const playerAgreement = () => {
  const [minionNumber, setMinionNumber] = useState<number>(1);
  const [isChange, setIsChange] = useState<boolean>(false);
  const nameField = useSelector((state: any) => state.agreementField.name);
  const defenseField = useSelector(
    (state: any) => state.agreementField.defense
  );
  const strategyField = useSelector(
    (state: any) => state.agreementField.strategy
  );
  const dispatch = useDispatch();
  const { sendMessage, subscribe, connect } = useWebSocket();
  const client = useAppSelector(selectWebsocket);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
    setIsChange(true)
    console.log("Name Change bool : " + isChange);
  };

  const handleDefenseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDefense(Number(event.target.value)));
    setIsChange(true)
    console.log("Def Change bool : " + isChange);
  };

  const handleStraetgyChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setStrategy(event.target.value));
    setIsChange(true);
    console.log("Strategy Change bool : " + isChange);

  };

  useEffect(() => {
    subscribe("/agreement/minion", (payload: IMessage) => {
      onSettingUpdate(payload);
      setIsChange(false)
    });
    // sendMessage("/agreement/getData",'');
  }, [client.isConnected]);

  const onSettingUpdate = (payload: IMessage) => {
    console.log(`received payload :  ${payload.body}`);
    const jsonPayload = JSON.parse(payload.body);
    setMinionNumber(jsonPayload.number);
    dispatch(setName(jsonPayload.name));
    dispatch(setDefense(jsonPayload.defense));
    dispatch(setStrategy(jsonPayload.strategy));
  };

  const handleCompileClick = () => {};

  const handleConfirmClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!isChange) {
      alert("Both Player agree on this minion. Move on to the next minion.")
    }
    else{
      alert("Minion update sent.")
    }
    sendMessage("/minion/update", {
      isChange:isChange,
      name: nameField,
      defense: defenseField,
      strategy: strategyField,
    });
    setIsChange(false);
  };

  return (
    <div
      className={`gap-20 flex flex-row border border-black border-b-2  min-h-screen bg-primary justify-center ${font.className}`}
    >
      <PlayerChooseNumber></PlayerChooseNumber>
      <div className="flex flex-col gap-4 justify-center p-5">
      <h1 className="absolute select-none top-28 left-20 text-outline text-8xl">{minionNumber}</h1>
        <div className="flex justify-center">
          <Hexfreame Minion={minionNumber}></Hexfreame>
        </div>
        <div className="flex flex-col items-start ">
          <h1 className="text-black text-[1.5rem]">name</h1>
          <GameTextInput
            prob={nameField}
            handleChange={handleNameChange}
            length="w-[23.563rem]"
          ></GameTextInput>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-black text-[1.25rem] select-none">defense</h1>
          <GameTextInput
            forNumber={true}
            prob={defenseField}
            handleChange={handleDefenseChange}
            length="w-[23.563rem]"
          ></GameTextInput>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20">
        <div className="divForStrategyField">
          <h1 className="text-[1.2rem] text-black select-none">Strategy</h1>
          <TextArea
            prop={strategyField}
            handleChange={handleStraetgyChange}
          ></TextArea>
        </div>
        <div className="">
          <div className="flex flex-row gap-2">
            <GameButton
              handleClick={handleConfirmClick}
              title="Confirm"
              disable={!(nameField && defenseField > 0 && strategyField)}
            ></GameButton>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default playerAgreement;
