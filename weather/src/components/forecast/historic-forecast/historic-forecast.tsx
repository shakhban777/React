import React from 'react';
import Placeholder from "../../placeholder/placeholder";
import SelectDate from "../../selectors/select-date/select-date";
import SelectCity from "../../selectors/select-city/select-city";
import {CityType, DataType} from "../../app/app";
import '../forecast.scss';
import WeatherCard from "../../weather-cards/weather-card";

type HistoricWeatherTypeProps = {
   cities: CityType[],
   showHistoricForecast: boolean,
   onChangeHandler: (coords: string, blockNum: number) => void,
   onChangeDateHandler: (date: number) => void,
   historicData: DataType
}

const HistoricForecast: React.FC<HistoricWeatherTypeProps> = ({
                                                                 cities,
                                                                 showHistoricForecast,
                                                                 onChangeHandler,
                                                                 onChangeDateHandler,
                                                                 historicData
                                                              }) => {
   const blockNum = 1;

   const weatherOrPlaceholder = showHistoricForecast
      ? <WeatherCard date={historicData.date}
                     icon={historicData.icon}
                     temperature={historicData.temperature}
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
};

export default HistoricForecast;