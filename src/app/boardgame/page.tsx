"use client";
import "../components/css/boardFlex.css";
import { useState } from "react";
import { HexagonGrid } from "../components/HexagonGrid";
import PlayerStatus from "../components/PlayerStatus";
import PlayerMenu from "../components/PlayerMenu";
import PlayerMenuConfirm from "../components/PlayerManuConfirm";
import { useSelector } from "react-redux";
import { RootState } from "@/app/stores/store";
import { selectUserName, selectRole, selectRoomId } from '../stores/slices/playerProfileSlice';



const greet = (event: any) => {
  alert(event.target.q)
}

const grid = () => {
  
  const thisPlayerName = useSelector(selectUserName);
  const roomId = useSelector(selectRoomId);
  const thisUserRole = useSelector(selectRole); 

  var h = window.innerHeight;
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [turnEnded, setTurnEnded] = useState<boolean>(false);

  const handleMenuClick = (action: string) => {
    if (action === "END TURN") {
      if (!turnEnded) { 
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


{/* P1 Box */}
        <div className="flex grow flex-col h-full">
          <div className="mt-10 mb-10">
            <PlayerStatus money={10000} team={5}></PlayerStatus>
          </div>
          <div>
           {/**/}
           {thisUserRole === "player1" ? (<div className="flex min-h-screen justify-center items-center">
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
            </div>):null}
          </div>
        </div>

{/* BoardGame Box */}
        <div
          className="flex grow justify-center items-center  h-full ">
          <HexagonGrid></HexagonGrid>
        </div>



{/* P2 Box */}
<div className="flex grow  flex-col-reverse h-full ">
          
          <div className="justify-center items-center mb-16 mt-14">
            <PlayerStatus money={10000} team={-5}></PlayerStatus>
          </div>
          <div>
           {/**/}
           {thisUserRole === "player2" ? (<div className="flex min-h-screen justify-center items-center">
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
            </div>):null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default grid;
