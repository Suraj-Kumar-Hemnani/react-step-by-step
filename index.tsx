import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Add from './Add';
import './style.css';
import Calc from './Calculator';

function App() {
  return (
    <div>
      <Hello name="Reload" />
      <Calc operation={'addition'} op1={3} op2={2} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
