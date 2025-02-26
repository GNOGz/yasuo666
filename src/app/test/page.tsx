"use client";

import { useState } from "react";
import PlayerMenu from "../components/PlayerMenu";
import PlayerMenuConfirm from "../components/PlayerManuConfirm";
import React from "react";

const Test = () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [turnEnded, setTurnEnded] = useState<boolean>(false);

  const handleMenuClick = (action: string) => {
    if (action === "END TURN") {
      if (!turnEnded) { // ป้องกัน console.log() ซ้ำ
        console.log("Turn Ended");
        setTurnEnded(true);
      }
      return;
    }
    setSelectedAction(action);
  };

  const handleConfirmClick = () => {
    if (selectedAction != null) {
        console.log(selectedAction);
    }
};


  const handleCancelClick = () => {
    setSelectedAction(null);
  };

  return (
    <div className="flex flex-col bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] min-h-screen justify-center items-center">
      {selectedAction ? (
        <PlayerMenuConfirm
          title={selectedAction}
          color={
            selectedAction === "BUY MINION"
              ? "bg-MMButton"
              : selectedAction === "BUY HEX"
              ? "bg-HexButton"
              : "bg-ENDButton"
          }
          onClick={handleConfirmClick} 
          onCancel={handleCancelClick}
        />
      ) : (
        <PlayerMenu
          handleBuyMinionClick={() => handleMenuClick("BUY MINION")}
          handleBuyHexClick={() => handleMenuClick("BUY HEX")}
          handlEndTurnClick={turnEnded ? undefined : () => handleMenuClick("END TURN")}
        />
      )}
    </div>
  );
};

export default Test;
