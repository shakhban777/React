import React from 'react';
import {CityType, DataType} from "../app/app";
import SelectCity from '../selectors/select-city/select-city';
import Placeholder from '../placeholder/placeholder';
import Weather from './weather/weather';
import WeatherCard from "../weather-cards/weather-card";
import SelectDate from "../selectors/select-date/select-date";
import './forecast.scss';

type ForecastTypeProps = {
   cities: CityType[],
   onChangeHandler: (coords: string, blockNum: number) => void,
   title: string
   blockNum: number
   sevenDaysWeatherData?: DataType[],
   onPrevHandler?: () => void,
   onNextHandler?: () => void,
   showAllWeatherCardsForSevenDays?: boolean,
   showHistoricForecast?: boolean,
   showSevenDaysForecast?: boolean,
   onChangeDateHandler?: (date: number) => void,
   historicWeatherData?: DataType,
}

const Forecast: React.FC<ForecastTypeProps> = ({
                                                  sevenDaysWeatherData,
                                                  showSevenDaysForecast,
                                                  cities,
                                                  onChangeHandler,
                                                  onPrevHandler,
                                                  onNextHandler,
                                                  showAllWeatherCardsForSevenDays,
                                                  title,
                                                  blockNum,
                                                  showHistoricForecast,
                                                  historicWeatherData,
                                                  onChangeDateHandler
                                               }) => {

   if (blockNum === 0) {
      const weather = showSevenDaysForecast
         ? <Weather sevenDaysWeatherData={sevenDaysWeatherData}
                    onNextHandler={onNextHandler}
                    onPrevHandler={onPrevHandler}
                    showAllWeatherCardsForSevenDays={showAllWeatherCardsForSevenDays}
                    blockNum={blockNum}/>
         : <Placeholder/>;

      return (
         <section className='card'>
            <div className='card__content'>
               <div className='card__content-header'>
                  <h2 className='card__content-title'>{title}</h2>
                  <SelectCity onChangeHandler={onChangeHandler}
                              cities={cities}
                              blockNum={blockNum}/>
               </div>
               <div>
                  {weather}
               </div>
            </div>
         </section>
      );
   } else {
      const weatherOrPlaceholder = showHistoricForecast
         ? <WeatherCard date={historicWeatherData!.date}
                        icon={historicWeatherData!.icon}
                        temperature={historicWeatherData!.temperature}
                        blockNum={blockNum}/>
         : <Placeholder/>;

      return (
         <section className='card'>
            <div className='card__content'>
               <div className='card__content-header'>
                  <h2 className='card__content-title'>Forecast for a Date in the Past</h2>
                  <div className="card__select">
                     <SelectCity cities={cities}
                                 onChangeHandler={onChangeHandler}
                                 blockNum={blockNum}/>
                     <SelectDate onChangeDateHandler={onChangeDateHandler}/>
                  </div>
               </div>
               <div>
                  {weatherOrPlaceholder}
               </div>
            </div>
         </section>
      );
   }
};

export default Forecast;