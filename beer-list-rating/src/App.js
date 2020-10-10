import React, { useState } from 'react';
import BeerList from "./BeerList";
import beerData from "./beer-data.json";

function App() {
  const [beers, setBeers] = useState(beerData);

  const rateBeer = (id, rating) => {
    const newBeers = beers.map(beer =>
      beer.id === id ? { ...beer, rating } : beer
    );
    setBeers(newBeers);
  };

  const removeBeer = (id) => {
    const newBeers = beers.filter(beer => beer.id !== id);
    setBeers(newBeers);
  };

  return (
    <div className="App">
      <BeerList beers={beers} onRate={rateBeer} onRemove={removeBeer} />
    </div>
  );
}

export default App;
