import React from 'react';
import './numeric.scss';

const NumericElement = (props) => (
   <div name={props.num} className='numericElement button'>
      {props.num}
   </div>
);

export default NumericElement;