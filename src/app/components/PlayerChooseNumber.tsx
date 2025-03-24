"use client";
import { useEffect, useState } from "react";
import Hexagon from "../components/Hexagon";
import { useRouter } from "next/navigation";
import GameButton from "./GameButton";

interface NumberButtonProps {
    num: number;
    selectedNumber: number;
    setSelectedNumber: (num: number) => void;
}
const NumberButton = ({ num, selectedNumber, setSelectedNumber } : NumberButtonProps) => {
  return (
    <div key={num} onClick={() => setSelectedNumber(num)}>
      <div className={`flex flex-col mx-3 w-[6.25rem] h-[12.5rem] bg-MMButton cursor-pointer ${selectedNumber >= num ? "" : "grayscale"}`}>
        <Hexagon id={0} Own={0} Minion={-num} bt={false} off={true} />
        <h1 className="select-none text-black text-center text-8xl">{num}</h1>
      </div>
    </div>
  );
};
interface SelectButtonProps {
    handleClick: () => void;
    selectedNumber: number;
  }
const SelectButton = ({ handleClick, selectedNumber }:SelectButtonProps) => {
 
return (
    <div 
      onClick={handleClick} 
      className={`my-1 ${selectedNumber !== 0 ? "hover:scale-110" : null}`}>
      <GameButton title="Select" disable={selectedNumber !==0?false:true} ></GameButton>
    </div>
  );
};

const PlayerChooseNumber = () => {
  const router = useRouter();
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [isVisible,setIsVisible] = useState(true);
  const handleClick = () => {
    if (selectedNumber !== 0) {
      console.log(selectedNumber);
      setIsVisible(false);
      router.push("");
    } else {
      console.log("Please select a number");
    }
  };

  return (
    <div className={`absolute bg-primary w-full h-full z-30 ${isVisible?null:"invisible"}`}>
      <div className="flex flex-col w-auto h-[18rem] bg-primary justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
        <div className="flex flex-row justify-around">
          {[1, 2, 3, 4, 5].map((num) => (
            <NumberButton key={num} num={num} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
          ))}
        </div>
        <SelectButton handleClick={handleClick} selectedNumber={selectedNumber} />
      </div>
      </div>

   );
};

export default PlayerChooseNumber;
