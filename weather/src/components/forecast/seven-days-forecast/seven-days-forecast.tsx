import React from 'react';
import {CityType, DataType} from "../../app/app";
import SelectCity from '../../selectors/select-city/select-city';
import Placeholder from "../../placeholder/placeholder";
import WeatherCard from "../../weather-cards/seven-days-weather-card/seven-days-weather-card";
import arrowRight from '../../../assets/img/icons/arrow-right.svg';
import LeftArrowBlock from "../left-arrow/left-arrow";
import '../forecast.scss';

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
   const blockNum = 0;

   const RightArrowBlock = () => {
      return (
         <div onClick={onNextHandler}
              className="weather-blocks__arrow-right">
            <img src={arrowRight} alt="arrow-right"/>
         </div>
      );
   };

   const leftArrow = showAllWeatherCards ? null : <LeftArrowBlock onPrevHandler={onPrevHandler}/>;
   const rightArrow = showAllWeatherCards ? null : <RightArrowBlock/>;

   const Weather = () => {
      return (
         <div className='weather-blocks'>
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
      <section className='card'>
         <div className='card__content'>
            <div className='card__content-header'>
               <h2 className='card__content-title'>7 Days Forecast</h2>
               <SelectCity onChangeHandler={onChangeHandler}
                           cities={cities}
                           blockNum={blockNum}/>
            </div>
            <div>
               {weather}
            </div>
         </div>
      </section>
   )
}

export default SevenDaysForecast;