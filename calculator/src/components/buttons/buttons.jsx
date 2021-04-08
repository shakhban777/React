import React from 'react';
import './buttons.scss';
import Operation from "./operation/operation";
import Numeric from "./numuric/numeric";

const Buttons = (props) => {
   return (
      <div className='buttons'>
         <Numeric
            result={props.result}
            getNumber={props.getNumber}/>
         <Operation
            getOperation={props.getOperation}/>
      </div>
   );
}


export default Buttons;