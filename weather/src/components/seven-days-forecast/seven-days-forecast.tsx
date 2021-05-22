import React from 'react';
import {CityType, DataType} from "../app/app";
import SelectCity from '../select-city/select-city';
import Placeholder from "../placeholder/placeholder";
import WeatherCard from "../weather-card/weather-card";
import arrowLeft from '../../assets/img/icons/arrow-left.svg';
import arrowRight from '../../assets/img/icons/arrow-right.svg';

type CitiesTypeProps = {
   cities: CityType[],
   onChangeHandler: (coords: string, blockNum: number) => void,
   showSevenDaysForecast: boolean,
   data: DataType[],
   onPrevHandler: () => void,
   onNextHandler: () => void
}

const SevenDaysForecast: React.FC<CitiesTypeProps> = ({
                                                         data,
                                                         showSevenDaysForecast,
                                                         cities,
                                                         onChangeHandler,
                                                         onPrevHandler,
                                                         onNextHandler
                                                      }) => {

   const Weather = () => {
      return (
         <div className='weather'>
            <div onClick={onPrevHandler}
                 className="weather__arrow-left">
               <img src={arrowLeft} alt="arrow-left"/>
            </div>
            {
               data.map((obj: DataType) => {
                  return <WeatherCard key={obj.id}
                                      date={obj.date}
                                      icon={obj.icon}
                                      temperature={obj.temperature}/>
               })
            }
            <div onClick={onNextHandler}
                 className="weather__arrow-right">
               <img src={arrowRight} alt="arrow-right"/>
            </div>
         </div>
      )
   }

   const results = showSevenDaysForecast
      ? <Weather/>
      : <Placeholder/>;

   return (
      <div className='card'>
         <div className='card__content'>
            <div>
               <h2 className='card__content-title'>7 Days Forecast</h2>
               <SelectCity onChangeHandler={onChangeHandler} cities={cities}/>
            </div>
            <div>
               {results}
            </div>
         </div>
      </div>
   )
}

export default SevenDaysForecast;