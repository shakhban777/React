import React from 'react';
import './select-city.css';
import {CitiesTypeProps} from "../seven-day-forecast/seven-day-forecast";

const SelectCity: React.FC<CitiesTypeProps> = ({cities}) => {
   return (
      <div className='select-city'>
         <div className='select-city__input'>
            <input type="text" className='select-city__input-text' list="cities" placeholder='Select city'/>
         </div>
         <datalist id='cities'>
            {cities.map(city => {
               return (
                  <option key={city.lan} data-lat={city.lat} data-lan={city.lan} value={city.name}/>
               )
            })}
         </datalist>
      </div>
   )
};

export default SelectCity;