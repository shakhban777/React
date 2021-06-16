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
   onChangeLocation: (coords: string, blockSelect: number) => void,
   title: string
   blockSelect: number
   sevenDaysWeatherData?: DataType[],
   onPreviousDay?: () => void,
   onNextDay?: () => void,
   showAllWeatherCardsForSevenDays?: boolean,
   showHistoricForecast?: boolean,
   showSevenDaysForecast?: boolean,
   onChangeDate?: (date: number) => void,
   historicWeatherData?: DataType,
}

const Forecast: React.FC<ForecastTypeProps> = ({
                                                  sevenDaysWeatherData,
                                                  showSevenDaysForecast,
                                                  cities,
                                                  onChangeLocation,
                                                  onPreviousDay,
                                                  onNextDay,
                                                  showAllWeatherCardsForSevenDays,
                                                  title,
                                                  blockSelect,
                                                  showHistoricForecast,
                                                  historicWeatherData,
                                                  onChangeDate
                                               }) => {

   if (blockSelect === 0) {
      const weather = showSevenDaysForecast
         ? <Weather sevenDaysWeatherData={sevenDaysWeatherData}
                    onNextDay={onNextDay}
                    onPreviousDay={onPreviousDay}
                    showAllWeatherCardsForSevenDays={showAllWeatherCardsForSevenDays}
                    blockSelect={blockSelect}/>
         : <Placeholder/>;

      return (
         <section className='card'>
            <div className='card__content'>
               <div className='card__content-header'>
                  <h2 className='card__content-title'>{title}</h2>
                  <SelectCity onChangeLocation={onChangeLocation}
                              cities={cities}
                              blockSelect={blockSelect}/>
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
                        blockSelect={blockSelect}/>
         : <Placeholder/>;

      return (
         <section className='card'>
            <div className='card__content'>
               <div className='card__content-header'>
                  <h2 className='card__content-title'>Forecast for a Date in the Past</h2>
                  <div className="card__select">
                     <SelectCity cities={cities}
                                 onChangeLocation={onChangeLocation}
                                 blockSelect={blockSelect}/>
                     <SelectDate onChangeDate={onChangeDate}/>
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