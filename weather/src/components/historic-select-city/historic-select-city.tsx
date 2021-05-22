import React from 'react';
import {SelectCitiesTypeProps} from "../select-city/select-city";

const HistoricSelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeHandler}) => {
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler(event.target.value, 1);
   }

   return (
      <>
         <select className='select select-city' onChange={changeHandler}>
            <option hidden>Select city</option>
            {cities.map(city => {
               return (
                  <option key={city.lat}
                          value={`${city.lat}, ${city.lon}`}>{city.name}</option>
               )
            })}
         </select>
      </>
   )
};

export default HistoricSelectCity;