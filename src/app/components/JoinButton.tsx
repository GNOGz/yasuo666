import { Irish_Grover } from "next/font/google";

const mainFont = Irish_Grover({
    weight: ["400"],
    subsets: [],
  });

const JoinButton = ({disable, handleClick }: { disable?:boolean, handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
  const opacity = disable?"opacity-50":"";  
  return (
      <button
        className={`${opacity} ${mainFont.className} w-[2.375rem] h-[1.438rem] text-sm text-outline-mini border-black border border-solid px-1 bg-[#D9D9D9]`}
        onClick={handleClick} 
        disabled={disable?disable:false}
      >
        {"JOIN"}
      </button>
    );
  };
  
  export default JoinButton;
  