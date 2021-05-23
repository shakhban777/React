import React from 'react';
import {CityType, DataType} from "../app/app";
import SelectCity from '../select-city/select-city';
import Placeholder from "../placeholder/placeholder";
import WeatherCard from "../weather-card/weather-card";
import arrowLeft from '../../assets/img/icons/arrow-left.svg';
import arrowRight from '../../assets/img/icons/arrow-right.svg';

type WeatherTypeProps = {
   cities: CityType[],
   onChangeHandler: (coords: string, blockNum: number) => void,
   showSevenDaysForecast: boolean,
   data: DataType[],
   onPrevHandler: () => void,
   onNextHandler: () => void,
   showAllWeatherCards: boolean
}

const SevenDaysForecast: React.FC<WeatherTypeProps> = ({
                                                         data,
                                                         showSevenDaysForecast,
                                                         cities,
                                                         onChangeHandler,
                                                         onPrevHandler,
                                                         onNextHandler,
                                                         showAllWeatherCards
                                                      }) => {

   const LeftArrowBlock = () => {
      return (
         <div onClick={onPrevHandler}
              className="weather__arrow-left">
            <img src={arrowLeft} alt="arrow-left"/>
         </div>
      );
   };
   const RightArrowBlock = () => {
      return (
         <div onClick={onNextHandler}
              className="weather__arrow-right">
            <img src={arrowRight} alt="arrow-right"/>
         </div>
      );
   };

   const leftArrow = showAllWeatherCards ? null : <LeftArrowBlock/>;
   const rightArrow = showAllWeatherCards ? null : <RightArrowBlock/>;

   const Weather = () => {
      return (
         <div className='weather'>
            {leftArrow}
            {
               data.map((obj: DataType) => {
                  return <WeatherCard key={obj.id}
                                      date={obj.date}
                                      icon={obj.icon}
                                      temperature={obj.temperature}/>
               })
            }
            {rightArrow}
         </div>
      )
   }

   const weather = showSevenDaysForecast
      ? <Weather/>
      : <Placeholder/>;

   return (
      <div className='card'>
         <div className='card__content'>
            <div className='card__content-header'>
               <h2 className='card__content-title'>7 Days Forecast</h2>
               <SelectCity onChangeHandler={onChangeHandler} cities={cities}/>
            </div>
            <div>
               {weather}
            </div>
         </div>
      </div>
   )
}

export default SevenDaysForecast;