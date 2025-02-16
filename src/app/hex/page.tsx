"use client";
import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex,
  GridGenerator,
} from "react-hexgrid";
import "../App.css";

const greet = () =>{
  alert("Hello")
}

const grid = () => {
  const hexagons:Hex[] = GridGenerator.orientedRectangle(8, 8);
  // console.log(hexagons);
  return (
    <div className="bg-slate-500">
      <HexGrid  width={800} height={800} className="mx-auto text-sm bg-white">
        <Layout
          size={{ x: 5, y: 5 }}
          flat={true}
          spacing={1.1}
          origin={{ x: -25, y: -40 }}
        >
          {hexagons.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} onClick={greet}>
              <Text>{`${hex.q} ${hex.r} ${hex.s} `}</Text>
            </Hexagon>
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default grid;
