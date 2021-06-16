import React from "react";
import {DataType} from "../../app/app";
import LeftArrowBlock from "../left-arrow/left-arrow";
import RightArrowBlock from "../right-arrow/right-arrow";
import WeatherCard from "../../weather-cards/weather-card";
import '../forecast.scss';

type WeatherType = {
   sevenDaysWeatherData?: DataType[],
   showAllWeatherCardsForSevenDays?: boolean,
   onPreviousDay?: () => void,
   onNextDay?: () => void,
   blockSelect: number
}

const Weather: React.FC<WeatherType> = ({
                                           sevenDaysWeatherData,
                                           showAllWeatherCardsForSevenDays,
                                           onPreviousDay,
                                           onNextDay,
                                           blockSelect
                                        }) => {

   const leftArrow = showAllWeatherCardsForSevenDays ? null : <LeftArrowBlock onPrevHandler={onPreviousDay}/>;
   const rightArrow = showAllWeatherCardsForSevenDays ? null : <RightArrowBlock onNextHandler={onNextDay}/>;

   return (
      <div className='weather-blocks'>
         {leftArrow}
         {
            sevenDaysWeatherData!.map((obj: DataType) => {
               return <WeatherCard key={obj.id}
                                   date={obj.date}
                                   icon={obj.icon}
                                   temperature={obj.temperature}
                                   blockSelect={blockSelect}/>
            })
         }
         {rightArrow}
      </div>
   );
};

export default Weather;