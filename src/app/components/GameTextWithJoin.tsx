import GameTextInput from "./GameTextInput";
import GameButton from "./GameButton";
const GameTextWithJoin = ({handleClick}:{handleClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void}) => {
  return (
    <div className="flex items-center">
      <GameTextInput></GameTextInput>
      <GameButton title={"Join"} handleClick={handleClick}></GameButton>
    </div>
  );
};
export default GameTextWithJoin;
