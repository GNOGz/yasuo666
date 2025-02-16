"use client";
import "../components/css/boardFlex.css";

import { HexagonGrid }  from "../components/HexagonGrid";

const greet = (event: any) => {
  alert(event.target.q)
}

const grid = () => {
  const priamry = "#919191"
  const secondary = "#D9D9D9"
  // console.log(hexagons);
  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: "800px",
      }}>
        <div
          className="item1"
          style={{
            backgroundColor: priamry,
            height: "100%",
            border: "10px solid black",
          }}
        ></div>
        <div
          className="item2"
          style={{
            height: "100%",
            backgroundColor: priamry,
            border: "10px solid black",
          }}
        >
          <HexagonGrid></HexagonGrid>
        </div>
        <div
          className="item3"
          style={{
            height: "100%",
            backgroundColor: priamry,
            border: "10px solid black",
          }}
        ></div>
      </div>

    </div>
  );
};

export default grid;
