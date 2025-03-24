'use client'
import React from "react";
import { Hexagon } from "./Hexagon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/stores/store";
import { setBoard } from "../stores/slices/boardSlice";
import { UseDispatch } from "react-redux";
import { useAppSelector } from "../stores/hook";
import { useEffect } from "react";
import { useWebSocket } from "../hooks/useWebsocket";
import { IMessage } from "@stomp/stompjs";
import { dispatch } from "@svgdotjs/svg.js";
import api from "../libs/api";

export const HexagonGrid= () => {
    const board = useSelector((state: RootState) => state.board.board);
    const columns = Array.from({ length: 8 });
    const rows = Array.from({ length: 8 });
    const {subscribe,sendMessage} = useWebSocket();
    const dispatch = useDispatch();
    useEffect(()=>{
  
    })

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
            <button className="bg-black p-2" onClick={()=>{
                    sendMessage("/game/botOperate",{

                    });
            }}>Hello world</button>
        </div>
    );
}
