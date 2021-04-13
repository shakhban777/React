import React from 'react';
import './numeric.scss';

const NumericElement = (props) => (
   <div
      name={props.num}
      className='numericElement button'
      onClick={() => props.getNumber(props.num)}>
         {props.num}
   </div>
);

export default NumericElement;