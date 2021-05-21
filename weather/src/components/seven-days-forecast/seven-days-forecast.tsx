import React from 'react';
import {CityType, DataType} from "../app/app";
import SelectCity from '../select-city/select-city';
import Placeholder from "../placeholder/placeholder";
import WeatherCard from "../weather-card/weather-card";
import arrowLeft from '../../assets/img/icons/arrow-left.svg';
import arrowRight from '../../assets/img/icons/arrow-right.svg';
import './seven-days-forecast.css';

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

   const WeatherBlock = () => {
      return (
         <div className='app__card-blocks'>
            <div onClick={onPrevHandler}
                 className="app__arrow-left">
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
                 className="app__arrow-right">
               <img src={arrowRight} alt="arrow-right"/>
            </div>
         </div>
      )
   }

   const results = showSevenDaysForecast
      ? <WeatherBlock/>
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

export default SevenDaysForecast;