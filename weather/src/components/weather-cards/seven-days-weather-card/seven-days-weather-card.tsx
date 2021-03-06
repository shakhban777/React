import React from "react";
import './seven-days-weather-card.scss';

export type WeatherTypeProps = {
   date: string,
   icon: string,
   temperature: string
}

const SevenDaysWeatherCard: React.FC<WeatherTypeProps> = ({date, icon, temperature}) => {
   return (
      <div className='weather-card'>
         <div className="weather-card__flex">
            <div className="weather-card__date">{date}</div>
            <img className='weather-card__image' src={icon} alt=""/>
            <div className="weather-card__temp">{temperature}</div>
         </div>
      </div>
   )
};

export default SevenDaysWeatherCard;