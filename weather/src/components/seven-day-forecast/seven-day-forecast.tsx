import React from 'react';
import {CityType, DataType} from "../app/app";
import SelectCity from '../select-city/select-city';
import Placeholder from "../placeholder/placeholder";
import WeatherCard from "../weather-card/weather-card";
import './seven-day-forecast.css';

type CitiesTypeProps = {
   cities: CityType[],
   onChangeHandler: (location: string) => void,
   showForecast: boolean,
   data: DataType[]
}

const SevenDayForecast: React.FC<CitiesTypeProps> = ({data, showForecast, cities, onChangeHandler}) => {
   console.log(data)
   const results = showForecast
      ? <div className='app__card-blocks'>
         {
            data.map((obj: DataType) => {
               return <WeatherCard key={obj.id}
                                   date={obj.date}
                                   icon={obj.icon}
                                   temperature={obj.temperature}/>
            })
         }
      </div>
      : <Placeholder/>;

   return (
      <div className='app__card'>
         <div className='app__content'>
            <div>
               <h2 className='app__card-title'>7 Days Forecast</h2>
               <SelectCity onChangeHandler={onChangeHandler} cities={cities}/>
            </div>
            <div>
               {results}
            </div>
         </div>
      </div>
   )
}

export default SevenDayForecast;