import React from 'react';
import { FaBeer } from "react-icons/fa";

export default function Beer({ selected, onSelect }) {
    return (
        <FaBeer color={selected ? "red" : "grey"} onClick={onSelect} />
    );
}