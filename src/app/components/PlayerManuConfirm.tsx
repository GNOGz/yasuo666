import MenuButton from "./MenuButton";
import GameButtonSM from "./GameButtonSM";
import { BuyMM } from "./BuyMM";

interface MenuButtonProps {
    title: string;
    color: string;
    onClick?: () => void;
    onCancel?: () => void;
}

const PlayerMenuConfirm = ({ title, color, onClick, onCancel }: MenuButtonProps) => {
    const handleConfirmClick = () => {
        if (onClick) onClick();
    };
    return (
        <div>
        {title === "BUY MINION" ? <div className="border border-b-2 border-black w-auto h-[220px] bg-primary flex flex-col gap-2 justify-center items-center">
            <MenuButton title={title} color={color} />          
            <BuyMM/>
            <div className="flex">
                <div className="mx-5">
                    <GameButtonSM title="Confirm" handleClick={handleConfirmClick} />
                </div>
                <div className="mx-5">
                    <GameButtonSM title="Cancel" handleClick={onCancel} />
                </div>
            </div>
        </div> : <div className="border border-b-2 border-black w-[300px] h-[125px] bg-primary flex flex-col gap-2 justify-center items-center">
            <MenuButton title={title} color={color} />          
            
            <div className="flex">
                <div className="mx-5">
                    <GameButtonSM title="Confirm" handleClick={handleConfirmClick} />
                </div>
                <div className="mx-5">
                    <GameButtonSM title="Cancel" handleClick={onCancel} />
                </div>
            </div>
        </div> 
        }  
        </div>
    );
};

export default PlayerMenuConfirm;
