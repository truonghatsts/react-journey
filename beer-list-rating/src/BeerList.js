import React from 'react';
import BeerRating from './BeerRating';
import { FaTrash } from "react-icons/fa";

export default function BeerList({ beers = [], onRate = f => f, onRemove = f => f }) {
    if (beers.length === 0) {
        return <span>No beers to display</span>
    }
    return (
        <div className="beer-list">
            {beers.map((beer, index) => (
                <div style={{ background: beer.color }}>
                    <p>
                        {beer.title}
                        <FaTrash onClick={() => onRemove(beer.id)} />
                    </p>
                    <BeerRating key={beer.id} beerId={beer.id} selectedBeers={beer.rating} onSelect={onRate} />
                </div>
            ))}
        </div>
    );
}