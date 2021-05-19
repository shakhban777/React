import React from 'react';
import SelectCity from '../select-city/select-city';
import './seven-day-forecast.css';
import {CityType} from "../app/app";
import Placeholder from "../placeholder/placeholder";
import WeatherCard from "../weather-card/weather-card";

export type CitiesTypeProps = {
   cities: CityType[],
   onChangeHandler?: (location: string) => void,
   date?: string,
   icon?: string,
   temperature?: number | null
}

const SevenDayForecast: React.FC<CitiesTypeProps> = ({cities,onChangeHandler, date,icon,temperature}) => {
   return (
      <div className='app__card'>
         <div className='app__content'>
            <div>
               <h2 className='app__card-title'>7 Days Forecast</h2>
               <SelectCity onChangeHandler={onChangeHandler} cities={cities}/>
            </div>
            <div>
               <WeatherCard date={date}
                            icon={icon}
                            temperature={temperature}/>
               {/*<Placeholder/>*/}
            </div>
         </div>
      </div>
   )
}

export default SevenDayForecast;