import React from 'react';
import {CityType} from "../app/app";

export type SelectCitiesTypeProps = {
   cities: CityType[],
   onChangeHandler: (coords: string, blockNum: number) => void
}

const SelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeHandler}) => {
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler(event.target.value, 0);
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

export default SelectCity;