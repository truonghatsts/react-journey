import React from 'react';
import { FaBeer } from "react-icons/fa";

export default function Beer({ style, selected, onSelect }) {
    return (
        <FaBeer color={selected ? "yellow" : "grey"} style={{ ...style }} onClick={onSelect} />
    );
}