import React, {useEffect, useState} from 'react';
import WeatherApiService from "../../api/api";
import Title from '../title/title';
import Forecast from "../forecast/forecast";
import './app.scss';

export type CityType = {
   name: string,
   lat: number,
   lon: number
}

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
   const widthOfWindow = useWindowDimensions();
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
   const [sevenDaysWeatherData, setSevenDaysWeatherData] = useState<DataType[]>([]);
   const [historicWeatherData, setHistoricWeatherData] = useState<DataType>({date: '', icon: '', temperature: ''});
   const [showSevenDaysForecast, setShowSevenDaysForecast] = useState<boolean>(false);
   const [showHistoricForecast, setShowHistoricForecast] = useState<boolean>(false);
   const [showAllWeatherCardsForSevenDays, setShowAllWeatherCardsForSevenDays] = useState<boolean>(false);
   const [toggleWeather, setToggleWeather] = useState<number>(0);

   const [firstArgumentOfLocation, secondArgumentOfLocation] = location;

   useEffect(() => {
      const latitude = firstArgumentOfLocation.lat;
      const longitude = secondArgumentOfLocation.lon;

      if (latitude && longitude) {
         const weatherService = new WeatherApiService();

         weatherService.getWeatherForSevenDays(latitude, longitude)
            .then(res => {
               setSevenDaysWeatherData([]);
               return res;
            })
            .then(res => {
               if (showAllWeatherCardsForSevenDays) {
                  return res;
               } else {
                  return res.slice(toggleWeather, 3 + toggleWeather);
               }
            })
            .then(res => {
               setSevenDaysWeatherData(res);
               setShowSevenDaysForecast(true);
            });
      }
   }, [firstArgumentOfLocation, secondArgumentOfLocation, toggleWeather, showAllWeatherCardsForSevenDays])

   useEffect(() => {
      const latitude = secondArgumentOfLocation.lat;
      const longitude = secondArgumentOfLocation.lon;

      if (latitude && longitude && date) {
         const weather = new WeatherApiService();
         weather.getWeatherForHistoricDate(latitude, longitude, date)
            .then(result => {
               setHistoricWeatherData(result);
               setShowHistoricForecast(true);
            })
      }
   }, [secondArgumentOfLocation, date])

   useEffect(() => {
      if (widthOfWindow <= 660) {
         setShowAllWeatherCardsForSevenDays(true);
      } else {
         setShowAllWeatherCardsForSevenDays(false);
      }
   }, [widthOfWindow])

   const locationHandler = (coords: string, blockNum: number) => {
      const [latitude, longitude] = coords.split(', ');
      const newObject = {
         lat: +latitude,
         lon: +longitude
      };

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
   };

   const togglePrevHandler = () => {
      if (0 < toggleWeather && toggleWeather <= 5) {
         setToggleWeather(prevState => --prevState);
      }
   };

   return (
      <div className='app'>
         <div className='_container'>
            <header className='app__title'>
               <Title/>
            </header>
            <main className='app__blocks'>
               <Forecast cities={cities}
                         title={'7 Days Forecast'}
                         showSevenDaysForecast={showSevenDaysForecast}
                         onChangeHandler={locationHandler}
                         onPrevHandler={togglePrevHandler}
                         onNextHandler={toggleNextHandler}
                         showAllWeatherCardsForSevenDays={showAllWeatherCardsForSevenDays}
                         sevenDaysWeatherData={sevenDaysWeatherData}
                         blockNum={0}/>

               <Forecast cities={cities}
                         title={'Forecast for a Date in the Past'}
                         showHistoricForecast={showHistoricForecast}
                         onChangeHandler={locationHandler}
                         onChangeDateHandler={dateHandler}
                         historicWeatherData={historicWeatherData}
                         blockNum={1}/>
            </main>
         </div>
      </div>
   );
};

export default App;