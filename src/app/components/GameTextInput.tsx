"use client";
import React from "react";
import { useState } from "react";

interface TextInputProp {
  length?: string;
  height?: string;
  forNumber?: boolean;
  disable?: boolean;
}

const GameTextInput = ({
  length,
  height,
  forNumber,
  disable,
}: TextInputProp) => {
  const [val, setVal] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  const h = height ? height : "h-[2em]";
  return (
    <div className={`${length}`}>
      <input
        type={forNumber ? "number" : "text"}
        className={`text-black p-2 ${length} ${h} border border-solid border-black bg-secondary 
          appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 `}
        disabled={disable ? disable : false}
        value={val}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default GameTextInput;
