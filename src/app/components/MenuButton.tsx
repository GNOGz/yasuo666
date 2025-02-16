interface btnProb {
  title: string;
  color: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const MenuButton = (prop: btnProb) => {
  return (
    <div className="text-white">
      <button
        className={`text-4xl text-outline 
            border-2 border-black rounded-md  ${prop.color} 
            w-[245px] h-[55px]`}
      >{`${prop.title}`}</button>
    </div>
  );
};

export default MenuButton;
