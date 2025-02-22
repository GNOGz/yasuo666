import GameButton from "./GameButton";
import GameTextWithJoin from "./GameTextWithJoin";
import JoinButton from "./JoinButton";

const JoinMenu = () => {
  return (
    <div className="text-sm text-outline-mini text-white w-[18.75rem] h-[28.125rem] bg-white border border-black border-b-2">
      <div className="text-left flex flex-col gap-2 mx-5 my-2 mt-4">
        <div>
          <div>Player1</div>
          <GameTextWithJoin length="w-[15.688em]" />
        </div>
        <div>
          <div>Player2</div>
          <GameTextWithJoin length="w-[15.688em]" />
        </div>
        <div>
          <div>Spectator</div>
          <div className="pl-2 pt-2 flex flex-col border border-b-2 border-black w-[15.688rem] h-[14.1563rem] bg-secondary">
            <ul className="flex-grow">
              <li>spectator 1</li>
              <li>spectator 2</li>
              <li>spectator 3</li>
            </ul>
            <div className="flex justify-end">
              <JoinButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMenu;
