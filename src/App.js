import React from 'react';
import './App.css';

import Coin from './components/Coin'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Live Bitcoin Statistics</h1>
      </div>
    <Coin />
    </div>
    
  );
}

export default App;