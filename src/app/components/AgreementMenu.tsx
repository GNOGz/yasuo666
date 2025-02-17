"use client";
import TextArea from "./TextArea";
import GameButton from "./GameButton";
import GameTextInput from "./GameTextInput";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import GameButtonSM from "./GameButtonSM";
import GameCheckButton from "./GameCheckbox";

interface agreementInterface {
    count:number,
    compileHandleClick?:(event: React.MouseEvent<HTMLButtonElement>) => void,
    agreeHandleClick?:(event: React.MouseEvent<HTMLButtonElement>) => void,
}

const font = JetBrains_Mono({
  weight: ["400"],
  subsets: [],
});
const AgreementMenu = ({count,compileHandleClick,agreeHandleClick}:agreementInterface) => {
  return (
    <div
      className={`border border-black border-b-2 my-2 w-[26.125em] h-[29.8125em] bg-primary p-5  ${font.className}`}
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
          <div className="w-[15em]">
            <h1>name</h1>
            <GameTextInput></GameTextInput>
          </div>
          <div className="w-[9em]">
            <h1>defense</h1>
            <GameTextInput></GameTextInput>
          </div>
        </div>
      </div>
      <h1>Strategy</h1>
      <div className="flex flex-row">
        <TextArea></TextArea>
        <div className="mx-auto ">
          <div className="my-16">
            <h1 className="text-9xl flex justify-center items-center text-outline">{`${count}`}</h1>
          </div>
          <div className="flex flex-col ml-2  gap-1">
            <div className="flex flex-row-reverse gap-1 ">
              <GameCheckButton></GameCheckButton>
              <GameCheckButton></GameCheckButton>
            </div>
            <div className="flex flex-row gap-2">
              <GameButtonSM handleClick={compileHandleClick} title="Compile"></GameButtonSM>
              <GameButtonSM handleClick={agreeHandleClick} title="Agree"></GameButtonSM>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementMenu;
