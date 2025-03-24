import MenuButton from "./MenuButton";
import {  PlayermenuProps }  from '@/app/Types/Interfaces';


const PlayerMenu = ({ buttons }: PlayermenuProps) => {
  return (
    <div className="border border-b-2 border-black w-[17.188rem] h-[9.25rem] bg-primary flex flex-col gap-2 justify-center items-center">
      {buttons.map((btn, index) => (
        <MenuButton key={index} title={btn.title} color={btn.color} handleClick={btn.handleClick} />
      ))}
    </div>
  );
};

export default PlayerMenu;
