"use client";
import React from "react";
import { useState } from "react";

interface TextInputProp {
  length?: string;
  height?: string;
  forNumber?: boolean;
  disable?: boolean;
  prob?:string,
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void 
}

const GameTextInput = ({
  length,
  height,
  forNumber,
  disable,
  prob,
  handleChange
}: TextInputProp) => {
  const h = height ? height : "h-[2rem]";
  const opacity = disable?"opacity-50":"";
  return (
    <div className={`${length}`}>
      <input
        type={forNumber ? "number" : "text"}
        className={`text-black p-2 ${length} ${h} border border-solid border-black bg-secondary 
          appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 ${opacity}`}
        disabled={disable ? disable : false}
        onChange={handleChange}
        value={prob}
      ></input>
    </div>
  );
};

export default GameTextInput;
