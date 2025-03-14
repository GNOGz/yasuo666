interface btnProb {
    title: string;
    color: string;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  const AgreementButton = (prop: btnProb) => {
    return (
      <div className="text-white">
        <button
          onClick={prop.handleClick}
          className={`pt-2 px-3 mx-2 justify-center items-center text-[35px] flex text-outline-sm 
              border border-black  ${prop.color} 
              `}
        >{`${prop.title}`}</button>
      </div>
    );
  };
  
  export default AgreementButton;
  