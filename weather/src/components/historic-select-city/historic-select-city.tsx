import React from 'react';
import './historic-select-city.css';
import {SelectCitiesTypeProps} from "../select-city/select-city";

const HistoricSelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeHandler}) => {
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler(event.target.value, 1);
   }

   return (
      <div className='select-city'>
         <select className='select-city__selector' onChange={changeHandler}>
            <option hidden>Select city</option>
            {cities.map(city => {
               return (
                  <option key={city.lat}
                          value={`${city.lat}, ${city.lon}`}>{city.name}</option>
               )
            })}
         </select>
      </div>
   )
};

export default HistoricSelectCity;