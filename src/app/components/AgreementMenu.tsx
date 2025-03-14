"use client";
import TextArea from "./TextArea";
import GameTextInput from "./GameTextInput";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import GameButtonSM from "./GameButtonSM";
import GameCheckButton from "./GameCheckbox";
import { agreementProp } from "../Types/Interfaces";
import { useEffect } from "react";
import { Stomp, Client, Message, IMessage } from "@stomp/stompjs";
import { useDispatch, useSelector } from "react-redux";
import {
  setDefense,
  setName,
  setStrategy,
} from "../stores/slices/agreementFieldSlice";
import { useWebSocket } from "../hooks/useWebsocket";
import { useAppSelector } from "../stores/hook";
import { selectWebsocket } from "../stores/slices/websocketSlice";
import MenuButton from "./MenuButton";
import AgreementButton from "./AgreementButton";

const font = JetBrains_Mono({
  weight: ["400"],
  subsets: [],
});
const AgreementMenu = ({}) => {
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
  };

  const handleDefenseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDefense(Number(event.target.value)));
  };

  const handleStraetgyChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setStrategy(event.target.value));
  };

  useEffect(() => {
    subscribe("/agreement/minion", (payload: IMessage) => {
      onSettingUpdate(payload);
    });
  }, [client.isConnected]);

  const onSettingUpdate = (payload: IMessage) => {
    console.log(`received payload :  ${payload.body}`);
    const jsonPayload = JSON.parse(payload.body);

    dispatch(setName(jsonPayload.name));
    dispatch(setDefense(jsonPayload.defense));
    dispatch(setStrategy(jsonPayload.strategy));
  };

  const handleCompileClick = () => {};

  const handleConfirmClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    sendMessage("/minion/update", {
      name: nameField,
      defense: defenseField,
      strategy: strategyField,
    });
    alert("Minion update sent");
  };

  return (
    <div
      className={` border border-black border-b-2 my-2 w-[28.125rem] h-[36.8125rem] bg-primary p-5  ${font.className}`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="text-center mx-auto">
          <Image
            src={"/yas1.jpg"}
            alt={"YasuoPic"}
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="leftOfTopSide input ">
          <div className="w-[15rem]">
            <h1>name</h1>
            <GameTextInput
              prob={nameField}
              handleChange={handleNameChange}
            ></GameTextInput>
          </div>
          <div className="w-[9rem]">
            <h1>defense</h1>
            <GameTextInput
              forNumber={true}
              prob={defenseField}
              handleChange={handleDefenseChange}
            ></GameTextInput>
          </div>
        </div>
      </div>
      <h1>Strategy</h1>
      <div className="flex flex-row">
        <TextArea
          prop={strategyField}
          handleChange={handleStraetgyChange}
        ></TextArea>
        <div className="mx-auto ">
          <div className="my-16">
            <h1 className="text-9xl flex justify-center items-center text-outline">{`${1}`}</h1>
          </div>
          <div className="flex flex-col ml-2  gap-1">
            <div className="flex flex-row-reverse gap-1 ">
              <GameCheckButton></GameCheckButton>
              <GameCheckButton></GameCheckButton>
            </div>
            <div className="flex flex-row gap-2">
              <GameButtonSM
                handleClick={handleCompileClick}
                title="Compile"
              ></GameButtonSM>
              <GameButtonSM
                handleClick={handleConfirmClick}
                title="Confirm"
              ></GameButtonSM>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex items-center flex-col gap-1">
          <AgreementButton 
            color="bg-secondary" 
            title="START"
          ></AgreementButton>
          <div className="flex gap-2">
            <GameCheckButton></GameCheckButton>
            <GameCheckButton></GameCheckButton>
          </div>
        </div>
        <div className="flex items-center flex-col gap-1">
          <AgreementButton
            color="bg-secondary"
            title="ADD MORE"
          ></AgreementButton>
          <div className="flex gap-2">
            <GameCheckButton></GameCheckButton>
            <GameCheckButton></GameCheckButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementMenu;
