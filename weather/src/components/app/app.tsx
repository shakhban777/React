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

   useEffect(() => {
      if (lat && lon) {
         const weather = new WeatherService();

         weather.getResource(lat, lon)
            .then(res => {
               setData([]);
               return res;
            })
            .then(res => {
               return res.slice(0, 3);
            })
            .then(res => {
               setData(res);
               setShowForecast(true);
            });
      }
   }, [lat, lon])

   const locationHandler = (location: string) => {
      const [latitude, longitude] = location.split(', ');
      setLat(+latitude);
      setLon(+longitude);
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
                  showForecast={showForecast}
                  data={data}/>
               <DateForecast cities={cities}/>
            </div>
         </div>
      </div>
   );
}

export default App;