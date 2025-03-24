import icon from '/image/money.svg'
export const PlayerStatus = ({team , money}:{team:number,money:number}) => {
    let num = 1;
    if (team < 0) num = 2;
    let teamColor = "text-Player1";
    if (team < 0) teamColor = "text-Player2";

    
    return (
      <div
  className={`${teamColor} w-[20.343725rem] 
    border border-b border-black h-[5.9375rem] bg-primary items-center
    gap-2 px-5 mx-auto flex flex-row text-center justify-between
  `}
>
  <h1 className="text-7xl text-outline">{`P${num}`}</h1>
  <div className="relative w-[90px] h-[90px] flex items-center justify-center">
    <svg width="100" height="100" viewBox="0 0 100 100">
      <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" className="fill-secondary" />
    </svg>
    <h1 className="absolute text-5xl text-outline">{`${num}`}</h1>
  </div>

  
  <div className="relative text-white w-[90px] h-[90px] flex items-center justify-center">
    <svg width="90" height="90" viewBox="0 0 100 100">
      <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" className="fill-secondary" />
    </svg>
    <img src='/image/money.svg' className="absolute"></img>
    <h1 className="absolute text-xl text-outline-sm">{`${money}`}</h1>
  </div>
</div>

  );
};

export default PlayerStatus;
