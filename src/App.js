import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Project imports
import Header from './Components/Header'
import Home from "./Components/Home"

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Route exact path="/" component={Home} />
    </div>
    </Router>
  );
}

export default App;
