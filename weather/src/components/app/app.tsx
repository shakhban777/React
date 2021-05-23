import React, {useEffect, useState} from 'react';
import WeatherService from "../../api/api";
import Title from '../title/title';
import SevenDaysForecast from '../seven-days-forecast/seven-days-forecast';
import HistoricForecast from "../historic-forecast/historic-forecast";
import './app.scss';

export type CityType = {
   name: string,
   lat: number,
   lon: number
};

export type DataType = {
   id?: number,
   date: string,
   icon: string,
   temperature: string
}

type LocationType = {
   lat: number | null,
   lon: number | null,
}

function useWindowDimensions() {
   const [width, setWidth] = React.useState<number>(window.innerWidth);
   useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
   });

   const updateWidth = () => {
      setWidth(window.innerWidth);
   };
   return width;
}

const App: React.FC = () => {
   const width = useWindowDimensions();
   const citiesArray = [
      {name: 'Самара', lat: 53.195873, lon: 50.100193},
      {name: 'Тольятти', lat: 53.507836, lon: 49.420393},
      {name: 'Саратов', lat: 51.533557, lon: 46.034257},
      {name: 'Казань', lat: 55.796127, lon: 49.106405},
      {name: 'Краснодар', lat: 45.035470, lon: 38.975313}
   ];

   const [cities] = useState<CityType[]>(citiesArray);
   const [location, setLocation] = useState<LocationType[]>([{lat: null, lon: null}, {lat: null, lon: null}]);
   const [date, setDate] = useState<number | null>(null);
   const [data, setData] = useState<DataType[]>([]);
   const [historicData, setHistoricData] = useState<DataType>({date: '', icon: '', temperature: ''});
   const [showSevenDaysForecast, setShowSevenDaysForecast] = useState<boolean>(false);
   const [showHistoricForecast, setShowHistoricForecast] = useState<boolean>(false);
   const [showAllWeatherCards, setShowAllWeatherCards] = useState<boolean>(false);
   const [toggleWeather, setToggleWeather] = useState<number>(0);

   const [first, second] = location;

   useEffect(() => {
      const lat = first.lat;
      const lon = first.lon;

      if (lat && lon) {
         const weather = new WeatherService();

         weather.getWeatherForSevenDays(lat, lon)
            .then(res => {
               setData([]);
               return res;
            })
            .then(res => {
               if (showAllWeatherCards) {
                  return res;
               } else {
                  return res.slice(toggleWeather, 3 + toggleWeather);
               }
            })
            .then(res => {
               setData(res);
               setShowSevenDaysForecast(true);
            });
      }
   }, [first, toggleWeather, showAllWeatherCards])

   useEffect(() => {
      const lat = second.lat;
      const lon = second.lon;

      if (lat && lon && date) {
         const weather = new WeatherService();
         weather.getWeatherForHistoricDate(lat, lon, date)
            .then(result => {
               setHistoricData(result);
               setShowHistoricForecast(true);
            })
      }
   }, [second, date])

   useEffect(() => {
      if (width <= 660) {
         setShowAllWeatherCards(true);
      } else {
         setShowAllWeatherCards(false);
      }
   }, [width])

   const locationHandler = (coords: string, blockNum: number) => {
      const [latitude, longitude] = coords.split(', ');
      const newObject = {
         lat: +latitude,
         lon: +longitude
      }

      setLocation(prevState => prevState.map(el => {
         if (el === prevState[blockNum]) {
            return newObject
         }
         return el;
      }));
   };

   const dateHandler = (date: number) => {
      setDate(date);
   };

   const toggleNextHandler = () => {
      if (0 <= toggleWeather && toggleWeather < 5) {
         setToggleWeather(prevState => ++prevState);
      }
   }

   const togglePrevHandler = () => {
      if (0 < toggleWeather && toggleWeather <= 5) {
         setToggleWeather(prevState => --prevState);
      }
   }

   return (
      <div className='app'>
         <div className='_container'>
            <div className='app__title'>
               <Title/>
            </div>
            <div className='app__blocks'>
               <SevenDaysForecast cities={cities}
                                  onChangeHandler={locationHandler}
                                  onPrevHandler={togglePrevHandler}
                                  onNextHandler={toggleNextHandler}
                                  showSevenDaysForecast={showSevenDaysForecast}
                                  data={data}
                                  showAllWeatherCards={showAllWeatherCards}/>
               <HistoricForecast cities={cities}
                                 showHistoricForecast={showHistoricForecast}
                                 onChangeHandler={locationHandler}
                                 onChangeDateHandler={dateHandler}
                                 historicData={historicData}/>
            </div>
         </div>
      </div>
   );
}

export default App;