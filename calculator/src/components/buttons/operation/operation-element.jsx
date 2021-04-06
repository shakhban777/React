import React from 'react';
import './operation.scss';

const OperationElement = (props) => (
   <div name={props.oper} className='operationElement button'>
      {props.oper}
   </div>
);

export default OperationElement;