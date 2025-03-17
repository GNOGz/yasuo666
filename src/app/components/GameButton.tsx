const GameButton = ({disable, title, handleClick }: {disable?:boolean; title: string; handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
  const opacity = disable?"opacity-50":"";  
  return (
      <button
        className={`${opacity} text-2xl text-outline-sm border-black border border-solid px-1 bg-[#D9D9D9]`}
        onClick={handleClick} 
        disabled = {disable?disable:false}
      >
        {title}
      </button>
    );
  };
  
  export default GameButton;
  