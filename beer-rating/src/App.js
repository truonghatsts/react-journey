import React from 'react';
import './App.css';
import BeerRating from "./BeerRating";

function App() {
  return (
    <div className="App">
      <BeerRating totalBeers={5} style={{ backgroundColor: "lightblue" }} />
    </div>
  );
}

export default App;
