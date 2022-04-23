import React from 'react';
import PropTypes from 'prop-types';

let Calc = ({ operation, op1, op2 }) => {
  let result = 0;
  switch (operation) {
    case 'addition':
      result = op1 + op2;
      break;
    case 'substract':
      result = op1 - op2;
      break;
    case 'multiply':
      result = op1 * op2;
      break;
    case 'divide':
      result = op2 !== 0 ? op1 / op2 : 0;
      break;
    default:
      result = 0;
  }
  return (
    <p>
      The {operation} of {op1} and {op2} is {result}.
    </p>
  );
};

Calc.propTypes = {
  operation: PropTypes.string,
  op1: PropTypes.number,
  op2: PropTypes.number,
};

export default Calc;
