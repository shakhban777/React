import React from 'react';
import './buttons.scss';
import Operation from "./operation/operation";
import Numeric from "./numuric/numeric";

const Buttons = (props) => {
   return (
      <div className='buttons'>
         <Numeric
            result={props.result}
            enterNum={props.enterNum}/>
         <Operation/>
      </div>
   );
}


export default Buttons;