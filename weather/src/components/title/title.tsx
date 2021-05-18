import React from 'react';
import './title.css';

const Title: React.FC = () => {
   return (
      <div className='title'>
         <div className='title__item-1'>Weather</div>
         <div className='title__item-2'>forecast</div>
      </div>
   )
}

export default Title;