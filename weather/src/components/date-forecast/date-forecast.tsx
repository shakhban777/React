import React from 'react';
import SelectCity from '../select-city/select-city';
import './date-forecast.css';
import Placeholder from "../placeholder/placeholder";
import {CityType} from "../app/app";

type DateTypeProps = {
   cities: CityType[],
}

const DateForecast: React.FC<DateTypeProps> = ({cities}) => {
   return (
      <div className='app__card'>
         <div className='app__content'>
            <div>
               <h2 className='app__card-title'>Forecast for a Date in the Past</h2>
               <SelectCity cities={cities}/>
            </div>
            <div>
               <Placeholder/>
            </div>
         </div>
      </div>
   )
}

export default DateForecast;