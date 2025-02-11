"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GameTextInput from "./components/GameTextInput";
import GameButton from "./components/GameButton";

const Home = () => {
  const router = useRouter();
  // useEffect(() => {
  //     router.push("/join");
  //   }, []);
    const sayHello = ()=> {
        alert('hello world');
    }
  return (
    <div className="text-center py-16 bg-slate-500 grid gap-2">
      <div>
        <GameButton  title={"Compile"} handleClick={sayHello}></GameButton>
      </div>
      <div>
        <GameButton title={"Agree"}></GameButton>
      </div>
      <div>
        <GameButton title={"Join"}></GameButton>
      </div>
      
    </div>
  );
};

export default Home;
