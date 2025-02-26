"use client";
import "../components/css/boardFlex.css";

import { HexagonGrid } from "../components/HexagonGrid";
import PlayerStatus from "../components/PlayerStatus";
const greet = (event: any) => {
  alert(event.target.q)
}

const grid = () => {
  const priamry = "#919191"
  const secondary = "#D9D9D9"
  var h = window.innerHeight;

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
          className="item1"
          style={{
            height: "100%",
            border: "10px solid black",
          }}
        >
          <div className="flex items-start mt-14 mr-auto">
            <PlayerStatus money={10000} team={5}></PlayerStatus>
          </div>

        </div>
        <div
          className="item2"
          style={{
            height: "100%",
            border: "10px solid black",
          }}
        >
          <HexagonGrid></HexagonGrid>
        </div>
        <div
          className="item3"
          style={{
            height: "100%",
            border: "10px solid black",
          }}>
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
