"use client";
import { useEffect, useState } from "react";
import Hexagon from "../components/Hexagon";
import { useRouter } from "next/navigation";

interface NumberButtonProps {
    num: number;
    selectedNumber: number;
    setSelectedNumber: (num: number) => void;
}
const NumberButton = ({ num, selectedNumber, setSelectedNumber } : NumberButtonProps) => {
  return (
    <div key={num} onClick={() => setSelectedNumber(num)}>
      <div className={`flex flex-col mx-3 w-[6.25rem] h-[12.5rem] bg-MMButton ${selectedNumber >= num ? "" : "grayscale"}`}>
        <Hexagon id={0} Own={0} Minion={-num} bt={false} off={true} />
        <h1 className="text-black text-center text-8xl">{num}</h1>
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
      className={`bg-white w-[15.625rem] border-black border-2 h-[5rem] flex items-center justify-center ${selectedNumber !== 0 ? "hover:scale-110" : "opacity-25"}`}>
      <h1 className="text-7xl text-center text-outline text-white">Select</h1>
    </div>
  );
};

const PlayerChooseNumber = () => {
  const router = useRouter();
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleClick = () => {
    if (selectedNumber !== 0) {
      console.log(selectedNumber);
      router.push("");
    } else {
      console.log("Please select a number");
    }
  };

  return (
      <div className="flex flex-col w-auto h-[18.25rem] bg-primary justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-row justify-around">
          {[1, 2, 3, 4, 5].map((num) => (
            <NumberButton key={num} num={num} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
          ))}
        </div>
        <SelectButton handleClick={handleClick} selectedNumber={selectedNumber} />
      </div>
   );
};

export default PlayerChooseNumber;
