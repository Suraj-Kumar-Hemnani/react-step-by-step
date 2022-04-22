import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Add from './Add';
import './style.css';

interface AppProps {
  op1: number;
  op2: number;
}


function App() {
  return (
    <div>
      <Hello name="Reload" />
      <Add op1="3" op2={2} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
