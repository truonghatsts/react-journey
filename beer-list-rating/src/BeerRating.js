import React from 'react';
import Beer from "./Beer";

export default function BeerRating({ beerId, totalBeers = 5, selectedBeers = 0, onSelect = f => f }) {
    return (
        <div className="beer-rating">
            {[...Array(totalBeers).keys()]
                .map((v, i) =>
                    <Beer key={i} selected={selectedBeers > i} onSelect={() => onSelect(beerId, i + 1)} />
                )}
            <p>
                {selectedBeers} of {totalBeers} beers
            </p>
        </div>
    );
}