import React from 'react';
import cloud from '../../assets/img/cloud.svg';
import SelectCity from '../select-city/select-city';
import './seven-day-forecast.css';

const SevenDayForecast: React.FC = () => {
  return (
    <div className='seven-day-forecast'>
      <h2>7 Days Forecast</h2>
      <SelectCity/>
      <img src={cloud} alt="cloud" />
      <p>Fill in all the fields and the weather will be displayed</p>
    </div>
  )
}

export default SevenDayForecast;