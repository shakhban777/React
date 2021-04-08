import React from 'react';
import './operation.scss';
import OperationElement from "./operation-element";

const operations = ['<=', 'C', '/', '*', '-', '+', '='];

const Operation = (props) => (
   <div className='operation'>
      {operations.map(operation => <OperationElement
         key={operation}
         oper={operation}
         getOperation={props.getOperation}/>
      )}
   </div>
);

export default Operation;