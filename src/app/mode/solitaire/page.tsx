'use client'
import JoinMenu from "@/app/components/joinMenu";
import { JetBrains_Mono } from "next/font/google";
import { useState,useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SolitairJoinMenu from "@/app/components/SolitaireJoinMenu";
import { useDispatch } from "react-redux";
import api from "@/app/libs/api";
import { setPlayer2 } from "@/app/stores/slices/roomDataSlice";
import { error } from "console";

const mainFont = JetBrains_Mono({
  weight: ["400"],
  subsets: [],
});

const solitairPage = () => {
  const dispatch = useDispatch();
  const assignPlayer2 = async ()=>{
    try{
    const response = await api.get("/getPlayer2");
    dispatch(setPlayer2(response.data.name));
    }
    catch{
      alert("Cannot connect to the server.")
    }
  }
  useEffect(()=>{
    assignPlayer2()
  },[]);
  return (
    <div
      className={`${mainFont.className} flex flex-col gap-8 justify-center items-center text-outline min-h-screen bg-[url(https://preview.redd.it/in73r6sbixz31.png?width=4096&format=png&auto=webp&s=810fa4aef8f17b2ccf3ca4c18601eb731904d37e)] bg-cover bg-no-repeat text-center text-9xl text-white  `}
    >
      <div className="text-5xl">Player(s) Setup</div>
      <JoinMenu solitaire={true}></JoinMenu>
      <div className="border border-double-2 border-black text-xl text-outline-mini bg-secondary p-3">
        <div>
          <span className="text-red-400">Important : </span> Once your decision is made. You can not undo anything. <br></br>
          Because <span className="text-red-400"> people who follow the wind doesn't look back at the past.</span>
        </div>
      </div>
    </div>
  );
}
;

export default solitairPage;
