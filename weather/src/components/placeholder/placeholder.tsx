import React from 'react';
import cloud from '../../assets/img/placeholder.svg';

const Placeholder: React.FC = () => {
   return (
      <div className='placeholder'>
         <img className='placeholder__image' src={cloud} alt="cloud" />
         <p className='placeholder__text'>Fill in all the fields and the weather will be displayed</p>
      </div>
   )
}

export default Placeholder;