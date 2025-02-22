import GameTextInput from "./GameTextInput";
import JoinButton from "./JoinButton";
const GameTextWithJoin = ({length,handleClick}:{length?:string,handleClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void}) => {
  return (
    <div className="flex items-center">
      <GameTextInput length={length} height="h-[1.500rem]"></GameTextInput>
      <JoinButton  handleClick={handleClick}></JoinButton>
    </div>
  );
};
export default GameTextWithJoin;
