import React, { useContext } from "react";
import { AppContext } from "./";
import { Link } from "react-router-dom";

export default function Home() {
    const { data } = useContext(AppContext);
    return (
        <div>
            <h1>Altra</h1>
            <ul>
                {
                    data.map((p, i) => (
                        <li>
                            <Link to={p.symbol}>{p.symbol}</Link>
                        </li>))
                }
            </ul>
        </div>
    );
}