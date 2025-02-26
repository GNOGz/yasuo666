"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



const Home = () => {
  const router = useRouter();
  useEffect(() => {
      router.push("/menu");
    }, []);
  const sayHello = () => {
    alert("hello world");
  };
  return (
    <div className="min-h-screen  text-center flex flex-col justify-center bg-slate-400">
      <div className="text-9xl text-outline">LOADING......</div>
    </div>
    
  );
};

export default Home;
