const GameTextInput = ({ length,forNumber }: { length?: number,forNumber?:boolean }) => {
  return (
    <div className="w-full">
      <input
        type={forNumber?"number":"text"}
        className={`text-black p-2 w-full h-[2em] border border-solid border-black bg-secondary 
          appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 `}
      ></input>
    </div>
  );
};

export default GameTextInput;

