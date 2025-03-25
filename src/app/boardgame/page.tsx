"use client";
import "../components/css/boardFlex.css";
import { useEffect, useState } from "react";
import { HexagonGrid } from "../components/HexagonGrid";
import PlayerStatus from "../components/PlayerStatus";
import PlayerMenu from "../components/PlayerMenu";
import PlayerMenuConfirm from "../components/PlayerManuConfirm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/app/stores/store";
import { selectUserName, selectRole, selectRoomId } from '../stores/slices/playerProfileSlice';
import { setSelectHex,setSelectMinion,selectHex,selectMinion } from "../stores/slices/selecterHexMinion";

const greet = (event: any) => {
  alert(event.target.q)
}

const grid = () => {
  const dispatch = useDispatch();
  const selectorHex = useSelector(selectHex);
  const selectorMinion = useSelector(selectMinion);


  
  const thisUserRole = useSelector(selectRole);
  const StateList = ["R1", "S1", "R2", "S2","END"]
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [actionState, setActionState] = useState<string>(StateList[0]);
  

  const [turnEnded, setTurnEnded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {subscribe} = useWebSocket();
  useEffect(()=>{
        subscribe("/mainGame", (payload:IMessage) => {
          console.log(`received payload :  ${payload.body}`);
          const jsonPayload = JSON.parse(payload.body);
          dispatch(setBoard(jsonPayload.hexProp));
        });
  })
  const handleMenuClick = (action: string) => {
    if (actionState === StateList[0] && action === "BUY HEX") {
      setActionState(StateList[1]);
    } else if (actionState === StateList[2] && action === "BUY MINION") {
      setActionState(StateList[3]);
    } else if (actionState === StateList[0] && action === "SKIP") {
      setActionState(StateList[2]);
    } else if (actionState === StateList[2] && action === "END TURN") {
      setActionState("END");
    }
  };

  const handleConfirmClick = () => {
    if (actionState === StateList[1]) {
      setActionState(StateList[2]);
      //confirm hex here.
    } else if (actionState === StateList[3] && selectorHex !== -1 && selectorMinion != 0) {
      setActionState(StateList[4])
      //confirm buy Minion here.
      console.log("turn end")
    }
    dispatch(setSelectHex(-1));
    dispatch(setSelectMinion(0));
  };

  const handleCancelClick = () => {
    if (actionState === StateList[1]) {
      setActionState(StateList[0]);
    } else if (actionState === StateList[3]) {
      setActionState(StateList[2]);
    }
    dispatch(setSelectHex(-1));
    dispatch(setSelectMinion(0));
  };
  const BuyHex = {
    title: "BUY HEX",
    color: "bg-HexButton",
    handleClick: () => handleMenuClick("BUY HEX"),
  } as const

  const BuyMinion = {
    title: "BUY MINION",
    color: "bg-MMButton",
    handleClick: () => handleMenuClick("BUY MINION"),
  } as const

  const Skip = {
    title: "SKIP",
    color: "bg-ENDButton",
    handleClick: () => handleMenuClick("SKIP"),
  } as const

  const ENDTurn = {
    title: "END TURN",
    color: "bg-ENDButton",
    handleClick: () => handleMenuClick("END TURN"),
  } as const

  return (
    <div>
      <div className="flex items-center justify-center bg-white h-screen">
        {/* condition and Winner here */}
        {false ?<Winnerscreen player={0}/>:null}
        {/* P1 Box */}
        <div className="flex w-[25rem] flex-col h-full">
          <div className="mt-10 mb-10">
            <PlayerStatus money={10000} team={5}></PlayerStatus>
            
          </div>
          <div>
            {thisUserRole === "player1" ? (<div className="flex min-h-screen justify-center items-center">
              {actionState === StateList[0] ? <PlayerMenu buttons={[BuyHex, Skip]} /> : actionState === StateList[1]
                ?
                <PlayerMenuConfirm
                  color={"bg-HexButton"}
                  title={"BUY HEX"}
                  onCancel={handleCancelClick}
                  onClick={handleConfirmClick}
                /> : actionState === StateList[2] ? <PlayerMenu buttons={[BuyMinion, ENDTurn]} /> :
                  actionState === StateList[3] ? 
                    <PlayerMenuConfirm
                    color={"bg-MMButton"}
                    title={"BUY MINION"}
                    onCancel={handleCancelClick}
                    onClick={handleConfirmClick}
                    
                    />: null
                    
                    }
                  </div>) : null}
            </div>
        </div>

          {/* BoardGame Box */}
          <div
            className="flex flex-col grow justify-center items-center  h-full ">
              
            <HexagonGrid></HexagonGrid>
            <h1 className="text-outline text-8xl -mt-6">{/*turn here*/}</h1>
          </div>



          {/* P2 Box */}
          <div className="flex w-[25rem]  flex-col-reverse h-full ">

            <div className="justify-center items-center mb-16 mt-14">
              <PlayerStatus money={10000} team={-5}></PlayerStatus>
            </div>
            <div>
              {/**/}
              {thisUserRole === "player2" ? (<div className="flex min-h-screen justify-center items-center">
                {actionState === StateList[0] ? <PlayerMenu buttons={[BuyHex, Skip]} /> : actionState === StateList[1]
                ?
                <PlayerMenuConfirm
                  color={"bg-HexButton"}
                  title={"BUY HEX"}
                  onCancel={handleCancelClick}
                  onClick={handleConfirmClick}
                /> : actionState === StateList[2] ? <PlayerMenu buttons={[BuyMinion, ENDTurn]} /> :
                  actionState === StateList[3] ? 
                    <PlayerMenuConfirm
                    color={"bg-MMButton"}
                    title={"BUY MINION"}
                    onCancel={handleCancelClick}
                    onClick={handleConfirmClick}
                    
                    />: null
                    
                    }
              
              </div>) : null}
            </div>
          </div>
        </div>
      </div>
      );
};

      export default grid;
