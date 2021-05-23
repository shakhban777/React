import React from "react";
import {WeatherTypeProps} from "../seven-days-weather-card/seven-days-weather-card";

const HistoricWeatherCard: React.FC<WeatherTypeProps> = ({date, icon, temperature}) => {
   const image = icon ? <img className='historic-weather-card__image' src={icon} alt=""/> : null;
   const text = date
      ? <div className="historic-weather-card__date">{date}</div>
      : <div className="error-text">Please enter last 5 days or choose from calendar</div>

   return (
      <div className='historic-weather-card'>
         <div className="historic-weather-card__flex">
            {text}
            {image}
            <div className="historic-weather-card__temp">{temperature}</div>
         </div>
      </div>
   )
};

export default HistoricWeatherCard;