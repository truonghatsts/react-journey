import React, { useState } from 'react';
import Beer from "./Beer";

export default function BeerRating({ totalBeers = 5, selectedBeers = 0 }) {
    return (
        <div className="beer-rating">
            {[...Array(totalBeers).keys()]
                .map((v, i) =>
                    <Beer key={i} selected={selectedBeers > i} />
                )}
            <p>
                {selectedBeers} of {totalBeers} beers
            </p>
        </div>
    );
}