'use client'
import { Irish_Grover } from "next/font/google";
const mainFont = Irish_Grover({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-[url(/loginBackground.png)] bg-cover bg-no-repeat text-center text-9xl text-white  ${mainFont.className}`}
    >
      <div className="text-outline">
        <h1 className="py-16 ">{`KOMBAT`} </h1>
        <div className="py-5 gap-10">
          <div className="cursor-pointer hover:scale-110">{`Play`}</div>
          <div className="cursor-pointer hover:scale-110">{`About`}</div>
        </div>
      </div>
    </div>
  );
}
