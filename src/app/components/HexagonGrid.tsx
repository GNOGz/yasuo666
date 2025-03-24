import React from "react";
import { Hexagon } from "./Hexagon";
import { useSelector } from "react-redux";
import { RootState } from "@/app/stores/store";
import { setBoard } from "../stores/slices/boardSlice";

export const HexagonGrid= () => {
    const board = useSelector((state: RootState) => state.board.board);
    const columns = Array.from({ length: 8 });
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
                        marginTop: rowIndex === 0 ? "20px" : "-65px",
                    }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                        {columns.map((_,colIndex) => (
                            <div key={colIndex}
                                style={{
                                    marginLeft: colIndex === 0 ? "0px" : "-37px",
                                    marginTop: colIndex %2 === 0 ? "35px" : "-35px",
                                   
                                }}>
                                <Hexagon id={(rowIndex*10)+colIndex} Own={board[rowIndex][colIndex]?.own} Minion={board[rowIndex][colIndex]?.mm} bt={board[rowIndex][colIndex]?.bt} type="Map"/>
                            </div>))}
                    </div></div>
            ))}
        </div>
    );
}
