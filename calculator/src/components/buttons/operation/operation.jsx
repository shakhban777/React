import React from 'react';
import './operation.scss';
import OperationElement from "./operation-element";

const operations = ['/', '*', '-', '+', '='];
const elements = operations.map(operation => <OperationElement key={operation} oper={operation}/>);

const Operation = () => (
   <div className='operation'>
      {elements}
   </div>
);

export default Operation;