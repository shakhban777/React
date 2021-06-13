import React from "react";
import {DataType} from "../../app/app";
import LeftArrowBlock from "../left-arrow/left-arrow";
import RightArrowBlock from "../right-arrow/right-arrow";
import '../forecast.scss';
import WeatherCard from "../../weather-cards/weather-card";

type WeatherType = {
   data: DataType[],
   showAllWeatherCards: boolean,
   onPrevHandler: () => void,
   onNextHandler: () => void,
   blockNum: number
}

const Weather: React.FC<WeatherType> = ({
                                           data,
                                           showAllWeatherCards,
                                           onPrevHandler,
                                           onNextHandler,
                                           blockNum
                                        }) => {

   const leftArrow = showAllWeatherCards ? null : <LeftArrowBlock onPrevHandler={onPrevHandler}/>;
   const rightArrow = showAllWeatherCards ? null : <RightArrowBlock onNextHandler={onNextHandler}/>;

   return (
      <div className='weather-blocks'>
         {leftArrow}
         {
            data.map((obj: DataType) => {
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