import React from "react";
import {DataType} from "../../app/app";
import LeftArrowBlock from "../left-arrow/left-arrow";
import RightArrowBlock from "../right-arrow/right-arrow";
import WeatherCard from "../../weather-cards/weather-card";
import '../forecast.scss';

type WeatherType = {
   sevenDaysWeatherData?: DataType[],
   showAllWeatherCardsForSevenDays?: boolean,
   onPrevHandler?: () => void,
   onNextHandler?: () => void,
   blockNum: number
}

const Weather: React.FC<WeatherType> = ({
                                           sevenDaysWeatherData,
                                           showAllWeatherCardsForSevenDays,
                                           onPrevHandler,
                                           onNextHandler,
                                           blockNum
                                        }) => {

   const leftArrow = showAllWeatherCardsForSevenDays ? null : <LeftArrowBlock onPrevHandler={onPrevHandler}/>;
   const rightArrow = showAllWeatherCardsForSevenDays ? null : <RightArrowBlock onNextHandler={onNextHandler}/>;

   return (
      <div className='weather-blocks'>
         {leftArrow}
         {
            sevenDaysWeatherData!.map((obj: DataType) => {
               return <WeatherCard key={obj.id}
                                   date={obj.date}
                                   icon={obj.icon}
                                   temperature={obj.temperature}
                                   blockNum={blockNum}/>
            })
         }
         {rightArrow}
      </div>
   );
};

export default Weather;