import React from 'react';
import './select-city.css';

const SelectCity: React.FC = () => {
   return (
      <div className='select-city'>
         <div className='select-city__input'>
            <input type="text" className='select-city__input-text' list="cities" placeholder='Select city'/>
         </div>
         <datalist id='cities'>
            <option data-value='53.195873, 50.100193' value="Самара"/>
            <option data-value='53.507836, 49.420393' value="Тольятти"/>
            <option data-value='51.533557, 46.034257' value="Саратов"/>
            <option data-value='55.796127, 49.106405' value="Казань"/>
            <option data-value='45.035470, 38.975313' value="Краснодар"/>
         </datalist>
      </div>
   )
}

export default SelectCity;