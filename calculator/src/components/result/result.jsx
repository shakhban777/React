import React from 'react';
import './result.scss';

const Result = (props) => (
   <div className='result'>
      <span>{props.result}</span>
   </div>
);

export default Result;