import React from 'react';
import './buttons.scss';
import Numeric from "./numuric/numeric";
import Operation from "./operation/operation";

const Buttons = () => (
   <div className='buttons'>
      <Numeric/>
      <Operation/>
   </div>
);

export default Buttons;