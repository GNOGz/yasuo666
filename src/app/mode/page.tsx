"use client";
import { useRouter } from "next/navigation";
import axios from "axios";

const modeSelect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.push("/menu");
  };

  const handleDuelClick = () => {
    router.push("/mode/duel");
  };

  const handleSolitareClick = () => {
    router.push("/mode/solitaire");
  };

  const handleAutoCLick = () => {
    router.push("/player_agreement");
  };

  return (
    <div
      className={`min-h-screen bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] bg-cover bg-no-repeat flex items-center justify-center text-white`}
    >
      <div className="text-outline text-center text-9xl">
        {/* <h1 className="py-16">{`KOMBAT`}</h1> */}
        <div className="flex flex-col gap-10">
          <div
            onClick={handleDuelClick}
            className="cursor-pointer hover:scale-110"
          >{`Duel`}</div>
          <div
            className="cursor-pointer hover:scale-110"
            onClick={handleSolitareClick}
          >{`Solitaire`}</div>
          <div
            className="cursor-pointer hover:scale-110"
            onClick={handleAutoCLick}
          >{`Auto`}</div>
        </div>
      </div>
      <div className="absolute top-7 left-7 text-8xl text-outline">
        <div
          onClick={handleBackClick}
          className="cursor-pointer hover:scale-110"
        >{`Back`}</div>
      </div>
    </div>
  );
};

export default modeSelect;
