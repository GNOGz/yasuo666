import GameTextInput from "./GameTextInput";
import JoinButton from "./JoinButton";
const GameTextWithJoin = (
  {length,
    handleClick,
  data,
disable,
handleChange}
    :{length?:string,
      handleClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void,
      data?:string,
      disable?:boolean
      handleChange?:(event:React.ChangeEvent<HTMLInputElement>) => void,
    }) => {
  return (
    <div className="flex items-center">
      <GameTextInput handleChange={handleChange} disable = {disable} prob = {data} length={length} height="h-[1.500rem]"></GameTextInput>
      <JoinButton disable = {disable} handleClick={handleClick}></JoinButton>
    </div>
  );
};
export default GameTextWithJoin;
