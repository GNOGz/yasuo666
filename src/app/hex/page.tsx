"use client";

import TextArea from "../components/TextArea";
import PlayerStatus from "../components/PlayerStatus";
import PlayerMenu from "../components/PlayerMenu";

const greet = () =>{
  alert("Hello")
}

const grid = () => {
  return (
    <div className="bg-slate-500 text-black text-center p-2  ">
      <PlayerMenu></PlayerMenu>
    </div>
  );
};

export default grid;
