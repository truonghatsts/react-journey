import React from 'react';
import { FaBeer } from "react-icons/fa";

export default function Beer({ selected }) {
    return (
        <FaBeer color={selected ? "yellow" : "grey"} />
    );
}