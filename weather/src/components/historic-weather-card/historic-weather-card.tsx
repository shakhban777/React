import React from "react";
import {WeatherTypeProps} from "../weather-card/weather-card";

const HistoricWeatherCard: React.FC<WeatherTypeProps> = ({ date,icon,temperature}) => {
   return (
      <div className='historic-weather-card'>
         <div className="historic-weather-card__flex">
            <div className="historic-weather-card__date">{date}</div>
            <img className='historic-weather-card__image' src={icon} alt=""/>
            <div className="historic-weather-card__temp">{temperature}</div>
         </div>
      </div>
   )
};

export default HistoricWeatherCard;