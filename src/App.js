import React from 'react';
import Header from '../src/components/Header';
import Currencies from '../src/components/Currencies';
import Amount from '../src/components/Amount'; 

import currencie from '../src/data/currencies'; 

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Currencies currencies={currencie} />
        <Amount />
    </div>
  );
}

export default App;
