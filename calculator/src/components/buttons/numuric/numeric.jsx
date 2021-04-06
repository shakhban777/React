import React from 'react';
import './numeric.scss';
import NumericElement from "./numeric-element";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0];
const elements = numbers.map(number => <NumericElement key={number} num={number}/>);

const Numeric = (props) => (
   <div className='numeric'>
      {elements}
   </div>
);

export default Numeric;