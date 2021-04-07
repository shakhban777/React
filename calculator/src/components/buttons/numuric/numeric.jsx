import React from 'react';
import './numeric.scss';
import NumericElement from "./numeric-element";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '±'];

const Numeric = (props) => (
   <div className='numeric'>
      {numbers.map(number => <NumericElement
         key={number}
         num={number}
         enterNum={props.enterNum}
      />)}
   </div>
);

export default Numeric;