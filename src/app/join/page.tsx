'use client'
import JoinMenu from "../components/joinMenu";
import { JetBrains_Mono } from "next/font/google";
import { useState,useEffect } from "react";
import { Client } from "@stomp/stompjs";

const mainFont = JetBrains_Mono({
  weight: ["400"],
  subsets: [],
});

const joinPage = () => {

  
  return (
    <div
      className={`${mainFont.className} flex flex-col gap-16 justify-center items-center text-outline min-h-screen bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] bg-cover bg-no-repeat text-center text-9xl text-white  `}
    >
      <div className="text-5xl">Player(s) Setup</div>
      <JoinMenu></JoinMenu>
      <div className="border border-double-2 border-black text-3xl text-outline-sm bg-secondary p-3">
        <div>
          <span className="text-red-400">Important : </span> Once your decision is made. You can not undo anything. <br></br>
          Because <span className="text-red-400"> people who follow the wind doesn't look back at the past.</span>
        </div>
      </div>
    </div>
  );
}
;

export default joinPage;
