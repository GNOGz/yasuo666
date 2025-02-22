import JoinMenu from "../components/joinMenu";
import { JetBrains_Mono } from "next/font/google";

const mainFont = JetBrains_Mono({
  weight: ["400"],
  subsets: [],
});

const joinPage = () =>{
    return(
        <div
        className={`${mainFont.className} flex flex-col justify-center items-center text-outline min-h-screen bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] bg-cover bg-no-repeat text-center text-9xl text-white  `}
      >
            <JoinMenu></JoinMenu>
      </div>
    );
}

export default joinPage;