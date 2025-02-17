const GameTextInput = ({ length }: { length?: number }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        className={`text-black p-2 w-full h-[2em] border border-solid border-black bg-secondary `}
      ></input>
    </div>
  );
};

export default GameTextInput;

