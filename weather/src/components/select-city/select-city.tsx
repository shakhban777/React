import React from 'react';
import {CityType} from "../app/app";
import './select-city.css';

type SelectCitiesTypeProps = {
   cities: CityType[],
   onChangeHandler?: (location: string) => void
}

const SelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeHandler}) => {
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler?.(event.target.value);
   }

   return (
      <div className='select-city'>
         <select className='select-city__input' onChange={changeHandler}>
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

export default SelectCity;