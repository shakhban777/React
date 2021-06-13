import React from 'react';
import {CityType, DataType} from "../../app/app";
import SelectCity from '../../selectors/select-city/select-city';
import Placeholder from "../../placeholder/placeholder";
import '../forecast.scss';
import Weather from "../weather/weather";

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


   const weather = showSevenDaysForecast
      ? <Weather data={data}
                 onNextHandler={onNextHandler}
                 onPrevHandler={onPrevHandler}
                 showAllWeatherCards={showAllWeatherCards}/>
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