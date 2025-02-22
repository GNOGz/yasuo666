const GameTextInput = ({ length,height,forNumber,disable }: { length?: string,height?:string,forNumber?:boolean,disable?:boolean }) => {
  const h = height?height:"h-[2em]";
  return (
    <div className={`${length}`}>
      <input
        type={forNumber?"number":"text"}
        className={`text-black p-2 ${length} ${h} border border-solid border-black bg-secondary 
          appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 `}
        disabled = {disable?disable:false}
      ></input>
    </div>
  );
};

export default GameTextInput;

