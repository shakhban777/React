import React from 'react';
import cloud from '../../assets/img/cloud.svg';
import SelectCity from '../select-city/select-city';
import './seven-day-forecast.css';
import {CityType} from "../app/app";

export type CitiesTypeProps = {
   cities: CityType[]
}

const SevenDayForecast: React.FC<CitiesTypeProps> = ({cities}) => {
   return (
      <div className='seven-day-forecast'>
         <h2 className='seven-day-forecast__title'>7 Days Forecast</h2>
         <SelectCity cities={cities}/>
         <img src={cloud} alt="cloud" />
         <p className='seven-day-forecast__footer-text'>Fill in all the fields and the weather will be displayed</p>
      </div>
   )
}

export default SevenDayForecast;