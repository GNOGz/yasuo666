interface handle {
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const AboutPage = (prop: handle) => {


    return (
        <div className="flex flex-col  bg-secondary w-[45.313rem] h-[40.313rem]  border-black border-2 p-5 text-wrap absolute">
            <h1 className="text-7xl  bg-cover bg-no-repeat text-center text-outline mb-5">The Rule of Victory</h1>
            <div className="text-left ml-9 mt-5">
            <p className="text-xl mt-2 text-primary">The game concludes under the following conditions:  </p>
            <p className="text-xl mt-2 text-HexButton">1. A player loses all their minions in the territory.  </p>
            <p className="text-xl mt-2 text-ENDButton">2. The maximum number of turns, as specified, has been reached. </p>
            <p className="text-xl mt-2 text-primary">In the last case: </p>
            <p className="text-xl mt-2 text-ENDButton">- The player with more remaining minions in the territory wins. </p>
            <p className="text-xl mt-2 text-ENDButton">- If both players have the same number of minions, the player with the higher total HP of all remaining minions wins.        </p>
            <p className="text-xl mt-2 text-ENDButton">- If both players have the same total HP, the player with the higher remaining budget wins.</p>
            <p className="text-xl mt-2 text-ENDButton">- If all conditions are still equal, the game ends in a tie.   </p>
            </div>
            <div className="flex justify-end">
        <div  className="cursor-pointer hover:scale-110 text-outline">Back</div>
            </div>
        </div>

    );
};
export default AboutPage;