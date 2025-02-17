import { Hex } from "react-hexgrid";

export const PlayerStatus = ({team , money}:{team:number,money:number}) => {
    let num = 1;
    if (team < 0) num = 2;
    let teamColor = "text-Player1";
    if (team < 0) teamColor = "text-Player2";
    
    
    return (
    <div
      className={`${teamColor} w-[17.343725em] 
    border border-b border-black h-[5.9375em] bg-primary items-center
    gap-5 px-5 mx-auto flex flex-row text-center justify-between
    `}
    >
      <h1 className="text-7xl  text-outline">{`P${num}`}</h1>
      <h1 className="text-7xl  text-outline">{`${num}`}</h1>
      <div className="text-white">
        <h1 className=" text-outline-sm">{`${money}`}</h1>
      </div>
    </div>
  );
};

export default PlayerStatus;
