import { Hexagon } from "./Hexagon";

export const HexagonList = () => {
    const hexagons = Array.from({ length: 8}); // Render 5 hexagons

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {hexagons.map((_, index) => (
                <div key={index} 
                    style={{
                        marginLeft: index === 0 ? "0px" : "-31px",
                        marginTop: index % 2 === 0 ? "50px" : "-50px", // Move up if even
                    }}><Hexagon/></div>
            ))}
        </div>)
}