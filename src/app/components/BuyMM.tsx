import { Hexagon } from "./Hexagon";
import { useSelector } from "react-redux";
import { selectMinion } from "../stores/slices/selecterHexMinion";

interface buymmPrope{
    onSelect?: (id: number) => void;
}

export const BuyMM = ({onSelect}:buymmPrope) => {
    const selectedMinion = useSelector(selectMinion);
    const columns = Array.from({ length: 5 });
    return (
        <div className="flex">
            {columns.map((_, colIndex) => {
                return(
                <div key={colIndex} className={`scale-75  ${selectedMinion+1 !== (colIndex*-1)? "grayscale":"" }`} style={{marginLeft : colIndex === 0 ? "0px":"-35px" } }>
                    <Hexagon id={colIndex} Own={0} off={true} Minion={colIndex + 1} bt={true} type={"Minion"} />
                </div>)
})}
        </div>
    );
};
