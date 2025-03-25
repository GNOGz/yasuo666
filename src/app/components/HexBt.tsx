import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSelectMinion, setSelectHex, selectHex} from "../stores/slices/selecterHexMinion";

interface IndexProps {
  index: number;
  type: string;
}

export const HexBt = ({ index, type }: IndexProps) => {
  const dispatch = useDispatch();
  const selectedHex = useSelector(selectHex);
  return (
    <button
      type="button"
      className={`w-12 h-12 flex items-center justify-center text-2xl text-white hover:opacity-80 active:scale-95 transition ${index===selectedHex?"scale-150":"" } ${type === "Minion"?"opacity-0":null}`}
      onClick={() => {
        /*console.log((index));
        console.log(type);*/
        if (type === "Map") {
          dispatch(setSelectHex(index));  
        } else {
          dispatch(setSelectMinion((index+1)*-1));
        }
      }}
      style={{ WebkitTextStroke: "1px black" }}
    >
      +
    </button>
  );
};
