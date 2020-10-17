import React, { useContext } from "react";
import { AppContext } from "./";
import { useParams } from "react-router-dom";

export default function Symbol() {
    const { data } = useContext(AppContext);
    let { symbol } = useParams();
    let pair = data.filter(p => p.symbol === symbol)[0];
    return (
        <div>
            <h1>{pair.symbol}</h1>
            <p>{pair.price}</p>
        </div>
    );
}