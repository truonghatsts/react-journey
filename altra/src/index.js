import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data.json';
import { BrowserRouter as Router } from "react-router-dom";

export const AppContext = createContext();

ReactDOM.render(
  <AppContext.Provider value={{ data }}>
    <Router>
      <App />
    </Router>
  </AppContext.Provider>,
  document.getElementById('root')
);