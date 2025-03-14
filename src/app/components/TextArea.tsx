import { JetBrains_Mono } from "next/font/google";
import GameTextInput from "./GameTextInput";
const font = JetBrains_Mono({
  weight: ["400"],
  subsets: [],
});

interface TextAreaProp {
  prop?: string;
  handleChange?: (event:React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (prop: TextAreaProp) => {
  return (
    <div>
      <textarea
      value={prop.prop}
      onChange={prop.handleChange}
        className={`${font.className} border border-black my-2 resize-none text-black p-2 w-[15.68em] h-[18.815em] bg-secondary overflow-auto`}
      ></textarea>
    </div>
  );
};

export default TextArea;
