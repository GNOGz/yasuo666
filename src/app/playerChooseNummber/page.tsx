"use client";
import { useEffect, useState } from "react";
import Hexagon from "../components/Hexagon";
import { useRouter } from "next/navigation";

const playerChooseNummber = () => {
  const router = useRouter();
  const [selectedNumber, setSelectedNumber] = useState(0);
  
  const handleClick = () => {
    if(selectedNumber != 0) {
    console.log(selectedNumber);
    //router.push(``);
    }else{
      console.log("Please select a number");
    }
  }
  return (
    <div className="flex items-center justify-center bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] p-5 min-h-screen ">
     <div className="flex flex-col w-auto h-[18.25rem] bg-primary justify-center items-center">
     <div className="flex flex-row justify-around ">
     {[1, 2, 3, 4, 5].map((num, index) => (
          <div 
            key={num} 
            onClick={() => setSelectedNumber(num)}
                      >
           <div className={`flex flex-col mx-3  w-[6.25rem] h-[12.5rem] bg-MMButton ${selectedNumber >= num ?null:"grayscale"}`}>
           <Hexagon id={0} Own={0} Minion={-num} bt={false} off={true} ></Hexagon>
           <h1 className="text-black text-center text-8xl">{num}</h1>
           </div>
          </div>
        ))}
    </div>
    <div onClick={handleClick} className={`bg-white w-[15.625rem] border-black border-2 h-[5rem] flex items-center justify-center ${selectedNumber != 0 ? "hover:scale-110":"opacity-25 "}`}><h1 className="text-7xl text-center text-outline text-white ">Select</h1></div>
    </div>
    </div>
  );
};

export default playerChooseNummber;
