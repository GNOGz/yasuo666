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
      <div className="drop-shadow-[4px_2px_0_black]">
        <h1 className="cursor-pointer py-16 ">{`KOMBAT`} </h1>
        <div className="py-5 gap-10">
          <h1 className="cursor-pointer">{`Play`}</h1>
          <h1 className="cursor-pointer">{`About`}</h1>
        </div>
      </div>
    </div>
  );
}
