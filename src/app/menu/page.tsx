"use client";
import { Irish_Grover } from "next/font/google";
import { useRouter } from "next/navigation";

const mainFont = Irish_Grover({
  weight: ["400"],
  subsets: ["latin"],
});

export default function join() {
  const router = useRouter();

  const handlePlayClick = () => {
    router.push("/mode");
  };
  const handleAboutClick = () =>{
    alert("clearing local storage");
    const data = localStorage.getItem("userProfile")
    const parsedData = data?JSON.parse(data):null;
    console.log(parsedData);
    console.log(parsedData.roomId);
  }
  return (
    <div
      className={`flex flex-col justify-center min-h-screen bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] bg-cover bg-no-repeat text-center text-9xl text-white  ${mainFont.className}`}
    >
      <div className="text-outline">
        <h1 className="py-16 ">{`KOMBAT`} </h1>
        <div className="py-5 gap-10">
          <div
            onClick={handlePlayClick}
            className="cursor-pointer hover:scale-110"
          >{`Play`}</div>
          <div onClick={handleAboutClick} className="cursor-pointer hover:scale-110">{`About`}</div>
        </div>
      </div>
    </div>
  );
}
