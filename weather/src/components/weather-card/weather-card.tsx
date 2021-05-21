import React from "react";
import './weather-card.css'

export type WeatherTypeProps = {
   date: string,
   icon: string,
   temperature: string
}

const WeatherCard: React.FC<WeatherTypeProps> = ({ date,icon,temperature}) => {

   return (
      <div className='weather-card'>
         <div className="weather-card_date">{date}</div>
         <img className='weather-card__image' src={icon} alt=""/>
         <div className="weather-card__temp">{temperature}</div>
      </div>
   )
};

export default WeatherCard;