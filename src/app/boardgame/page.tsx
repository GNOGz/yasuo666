"use client";
import "../components/css/boardFlex.css";
import { useState } from "react";
import { HexagonGrid } from "../components/HexagonGrid";
import PlayerStatus from "../components/PlayerStatus";
import PlayerMenu from "../components/PlayerMenu";
import PlayerMenuConfirm from "../components/PlayerManuConfirm";
const greet = (event: any) => {
  alert(event.target.q)
}

const grid = () => {
  const priamry = "#919191"
  const secondary = "#D9D9D9"
  var h = window.innerHeight;

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
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: h,
      }}>

        <div
          className="item1  h-[100%] border border-black border-b-2">
          <div className="flex items-start mt-14 mr-auto">
            <PlayerStatus money={10000} team={5}></PlayerStatus>
          </div>

          <div>
            <div className="flex flex-col min-h-screen justify-center items-center">
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

          </div>
        </div>
        <div
          className="item2  h-[100%] border border-black border-b-2">
          <HexagonGrid></HexagonGrid>
        </div>



        <div
          className="item3 h-[100%] border border-black border-b-2">
          <div className="flex  flex-col-reverse mt-96 mr-10">
            <PlayerStatus money={10000} team={-5}></PlayerStatus>
          </div>
          <div className="flex-1 flex justify-center">
          </div>
        </div>

      </div>
    </div>
  );
};

export default grid;
