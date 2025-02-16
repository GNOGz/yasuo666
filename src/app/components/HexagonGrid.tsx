import { Hexagon } from "./Hexagon"; 

export const HexagonGrid= () => {
    const hexagons = Array.from({ length: 8 });
    const rows = Array.from({ length: 8 });
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            {rows.map((_, rowIndex) => (
                <div key={rowIndex}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: rowIndex === 0 ? "66px" : "-33px",
                    }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                        {hexagons.map((_, index) => (
                            <div key={index}
                                style={{
                                    marginLeft: index === 0 ? "0px" : "-17.5px",
                                    marginTop: index % 2 === 0 ? "35px" : "-35px",
                                }}>
                                <Hexagon />
                            </div>))}
                    </div></div>
            ))}
        </div>
    );
}

