import React from 'react';
import {CityType} from "../app/app";
import './select-city.css';

export type SelectCitiesTypeProps = {
   cities: CityType[],
   onChangeHandler: (coords: string, blockNum: number) => void
}

const SelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeHandler}) => {
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler(event.target.value, 0);
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

export default SelectCity;