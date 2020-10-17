import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Symbol from "./Symbol";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route
          path="/:symbol">
          <Symbol/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
