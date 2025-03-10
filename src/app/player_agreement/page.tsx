"use client";
import AgreementMenu from "../components/AgreementMenu";
import PlayerStatus from "../components/PlayerStatus";
import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { agreementProp } from "../Types/Interfaces";

const playerAgreement = () => {
  useEffect(() => {
    const stompClient = new Client({
      brokerURL: "ws://localhost:8080/ws",
      onConnect: () => {
        console.log("Connected to WebSocket");
        stompClient.subscribe("/agreement/minion", (message) => {
          if (message.body) {
            console.log("Payload update");
          }
        });
      },
      onStompError: (frame) => {
        console.error("WebSocket Error:", frame);
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, []);

  return (
    <div className="flex justify-between bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] p-5 min-h-screen ">
      <div className="flex items-start mt-14 ml-10">
        <PlayerStatus money={10000} team={5}></PlayerStatus>
      </div>
      <div className="flex-1 flex flex-col  justify-center items-center">
        <div className="text-xl text-background  text-red-500 ">Wait for another Yasuo main to setup their minion.</div> 
        <div className="text-xl text-background  text-green-500 ">Now It's Your turn to adjust the minion settings.</div> 

        <AgreementMenu count={1} />
      </div>
      <div className="flex items-start flex-col-reverse mb-14 mr-10">
        <PlayerStatus money={10000} team={-5}></PlayerStatus>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default playerAgreement;
