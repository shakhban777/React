import React from 'react';
import Placeholder from "../placeholder/placeholder";
import SelectDate from "../select-date/select-date";
import HistoricWeatherCard from "../historic-weather-card/historic-weather-card";
import {CityType, DataType} from "../app/app";
import HistoricSelectCity from "../historic-select-city/historic-select-city";

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
   const weatherOrPlaceholder = showHistoricForecast
      ? <HistoricWeatherCard date={historicData.date}
                             icon={historicData.icon}
                             temperature={historicData.temperature}/>
      : <Placeholder/>;

   return (
      <div className='card'>
         <div className='card__content'>
            <div className='card__content-header'>
               <h2 className='card__content-title'>Forecast for a Date in the Past</h2>
               <div className="card__select">
                  <HistoricSelectCity cities={cities}
                                      onChangeHandler={onChangeHandler}/>
                  <SelectDate onChangeDateHandler={onChangeDateHandler}/>
               </div>
            </div>
            <div>
               {weatherOrPlaceholder}
            </div>
         </div>
      </div>
   )
}

export default HistoricForecast;