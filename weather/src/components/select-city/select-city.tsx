import React from 'react';
import './select-city.css';
import {CityType} from "../app/app";
import WeatherService from "../../api/api";

type SelectCitiesTypeProps = {
   cities: CityType[],
   onChangeHandler?: (location: string) => void
}

const SelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeHandler}) => {
   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler?.(event.target.value)
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

         {/*<div className='select-city__input'>*/}
         {/*   <input onChange={changeHandler} type="text" className='select-city__input-text' list="cities" placeholder='Select city'/>*/}
         {/*</div>*/}
         {/*<datalist id='cities'>*/}
         {/*   {cities.map(city => {*/}
         {/*      return (*/}
         {/*         <option key={city.lat}*/}
         {/*                 value={`${city.lat}, ${city.lon}`}>*/}
         {/*            {city.name}*/}
         {/*         </option>*/}
         {/*      )*/}
         {/*   })}*/}
         {/*</datalist>*/}
      </div>
   )
};

export default SelectCity;