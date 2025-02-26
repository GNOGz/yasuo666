import MenuButton  from "./MenuButton"

interface menuInterface{
    handleBuyMinionClick?:(event: React.MouseEvent<HTMLButtonElement>) => void,
    handleBuyHexClick?:(event: React.MouseEvent<HTMLButtonElement>) => void,
    handlEndTurnClick?:(event: React.MouseEvent<HTMLButtonElement>) => void,
}

const PlayerMenu = (prop:menuInterface)=>{
    return(
        <div className="border border-b-2 border-black w-[275] h-[222px] bg-primary flex flex-col gap-2 justify-center items-center">
                <MenuButton title="BUY MINION" color="bg-MMButton" handleClick={prop.handleBuyMinionClick}></MenuButton>
                <MenuButton title="BUY HEX" color="bg-HexButton" handleClick={prop.handleBuyHexClick}></MenuButton>
                <MenuButton title="END TURN" color="bg-ENDButton" handleClick={prop.handlEndTurnClick}></MenuButton>

        </div>
    )
}

export default PlayerMenu;