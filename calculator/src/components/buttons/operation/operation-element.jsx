import React from 'react';
import './operation.scss';

const OperationElement = (props) => (
   <div
      name={props.oper}
      className='operationElement button'
      onClick={() => props.getOperation(props.oper)}>
         {props.oper}
   </div>
);

export default OperationElement;