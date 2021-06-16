import React from "react";
import './seven-days-weather-card.scss';
import './historic-weather-card.scss';

export type WeatherTypeProps = {
   date: string,
   icon: string,
   temperature: string,
   blockSelect: number
}

const WeatherCard: React.FC<WeatherTypeProps> = ({date, icon, temperature, blockSelect}) => {
   if (blockSelect === 0) {
      return (
         <div className='weather-card'>
            <div className="weather-card__flex">
               <div className="weather-card__date">{date}</div>
               <img className='weather-card__image' src={icon} alt=""/>
               <div className="weather-card__temp">{temperature}</div>
            </div>
         </div>
      );
   } else {
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
      );
   }
};

export default WeatherCard;