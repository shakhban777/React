import React, {useState, useEffect} from 'react';
import WeatherService from "../../api/api";
import Title from '../title/title';
import SevenDayForecast from '../seven-day-forecast/seven-day-forecast';
import DateForecast from "../date-forecast/date-forecast";
import './app.css';

export type CityType = {
   name: string,
   lat: number,
   lon: number
};

export type DataType = {
   id: number,
   date: string,
   icon: string,
   temperature: string
}

const App: React.FC = () => {
   const [cities] = useState<CityType[]>([
      {name: 'Самара', lat: 53.195873, lon: 50.100193},
      {name: 'Тольятти', lat: 53.507836, lon: 49.420393},
      {name: 'Саратов', lat: 51.533557, lon: 46.034257},
      {name: 'Казань', lat: 55.796127, lon: 49.106405},
      {name: 'Краснодар', lat: 45.035470, lon: 38.975313}
   ]);
   const [lat, setLat] = useState<number | null>(null);
   const [lon, setLon] = useState<number | null>(null);
   const [data, setData] = useState<Array<DataType>>([]);
   const [showForecast, setShowForecast] = useState<boolean>(false);
   const [toggleWeather, setToggleWeather] = useState<number>(0);

   useEffect(() => {
      if (lat && lon) {
         const weather = new WeatherService();

         weather.getResource(lat, lon)
            .then(res => {
               setData([]);
               return res;
            })
            .then(res => {
               return res.slice(toggleWeather, 3 + toggleWeather);
            })
            .then(res => {
               setData(res);
               setShowForecast(true);
            });
      }
   }, [lat, lon, toggleWeather])

   const locationHandler = (location: string) => {
      const [latitude, longitude] = location.split(', ');
      setLat(+latitude);
      setLon(+longitude);
   }

   const toggleNextHandler = () => {
      if (0 <= toggleWeather && toggleWeather < 5) {
         setToggleWeather(prevState => ++prevState);
         console.log(toggleWeather);
      }
   }

   const togglePrevHandler = () => {
      if (0 < toggleWeather && toggleWeather <= 5) {
         setToggleWeather(prevState => --prevState);
         console.log(toggleWeather);
      }
   }

   return (
      <div className='app'>
         <div className='_container'>
            <div className='app__title'>
               <Title/>
            </div>
            <div className='app__blocks'>
               <SevenDayForecast
                  cities={cities}
                  onChangeHandler={locationHandler}
                  onPrevHandler={togglePrevHandler}
                  onNextHandler={toggleNextHandler}
                  showForecast={showForecast}
                  data={data}/>
               <DateForecast cities={cities}/>
            </div>
         </div>
      </div>
   );
}

export default App;