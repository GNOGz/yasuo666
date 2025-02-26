interface IndexProps {
    index: number;
  }
  
  export const HexBt = ({ index }: IndexProps) => {
    return (
      <button
        type="button"
        className="w-12 h-12 flex items-center justify-center text-2xl text-white hover:opacity-80 active:scale-95 transition"
        onClick={() => console.log(index)}
        style={{ WebkitTextStroke: '1px black' }} 
      >
        +
      </button>
    );
  };
  