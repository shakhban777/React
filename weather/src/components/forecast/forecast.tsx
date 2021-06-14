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
   data?: DataType[],
   onPrevHandler?: () => void,
   onNextHandler?: () => void,
   showAllWeatherCards?: boolean,
   showHistoricForecast?: boolean,
   showSevenDaysForecast?: boolean,
   onChangeDateHandler?: (date: number) => void,
   historicData?: DataType,
}

const Forecast: React.FC<ForecastTypeProps> = ({
                                                  data,
                                                  showSevenDaysForecast,
                                                  cities,
                                                  onChangeHandler,
                                                  onPrevHandler,
                                                  onNextHandler,
                                                  showAllWeatherCards,
                                                  title,
                                                  blockNum,
                                                  showHistoricForecast,
                                                  historicData,
                                                  onChangeDateHandler
                                               }) => {

   if (blockNum === 0) {
      const weather = showSevenDaysForecast
         ? <Weather data={data}
                    onNextHandler={onNextHandler}
                    onPrevHandler={onPrevHandler}
                    showAllWeatherCards={showAllWeatherCards}
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
         ? <WeatherCard date={historicData!.date}
                        icon={historicData!.icon}
                        temperature={historicData!.temperature}
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