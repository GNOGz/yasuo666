const GameButton = ({ title, handleClick }: { title: string; handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
      <button
        className="text-2xl text-outline-sm border-black border border-solid px-1 bg-[#D9D9D9]"
        onClick={handleClick} 
      >
        {title}
      </button>
    );
  };
  
  export default GameButton;
  