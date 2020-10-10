import React, { useState } from 'react';
import Beer from "./Beer";

export default function BeerRating({ style, totalBeers }) {
    const [selectedBeers, setSelectedBeers] = useState(0);
    return (
        <div className="beer-rating" style={{ padding: 5, ...style }}>
            {[...Array(totalBeers).keys()]
                .map((v, i) =>
                    <Beer key={i} selected={selectedBeers > i} onSelect={() => setSelectedBeers(i + 1)} />
                )}
            <p>
                {selectedBeers} of {totalBeers} beers
            </p>
        </div>
    );
}