import React from 'react';
import './App.css';
import 'h8k-components';
import Slide from './components/Slide';
function App({slides}) {
  return (
    <div className="App">
      <Slide slides={slides} />
    </div>
  );
}

export default App;
