import { Hexagon } from "./Hexagon";

export const BuyMM = () => {
    const columns = Array.from({ length: 5 });

    return (
        <div className="flex ">
            {columns.map((_, colIndex) => (
                <div key={colIndex} className="scale-75" style={{marginLeft : colIndex === 0 ? "0px":"-35px" }}> {/* ✅ ปรับตำแหน่งให้ไม่เบี้ยว */}
                    <Hexagon id={colIndex} Own={0} Minion={colIndex + 1} bt={true} />
                </div>
            ))}
        </div>
    );
};
