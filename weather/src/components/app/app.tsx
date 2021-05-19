import React, {useState, useEffect} from 'react';
import Title from '../title/title';
import SevenDayForecast from '../seven-day-forecast/seven-day-forecast';
import './app.css';
import WeatherService from "../../api/api";
import DateForecast from "../date-forecast/date-forecast";

export type CityType = {
   name: string,
   lat: number,
   lon: number
};

const App: React.FC = () => {
   const weather = new WeatherService();

   const [cities] = useState<CityType[]>([
      {name: 'Самара', lat: 53.195873, lon: 50.100193},
      {name: 'Тольятти', lat: 53.507836, lon: 49.420393},
      {name: 'Саратов', lat: 51.533557, lon: 46.034257},
      {name: 'Казань', lat: 55.796127, lon: 49.106405},
      {name: 'Краснодар', lat: 45.035470, lon: 38.975313}
   ]);
   const [lat, setLat] = useState<number | null>(null);
   const [lon, setLon] = useState<number | null>(null);
   const [date, setDate] = useState<string>('');
   const [icon, setIcon] = useState<string>('');
   const [temperature, setTemperature] = useState<number | null>(null);

   useEffect(() => {
      // weather.getResource(1, 1).then(res => {
      //    console.log(res.weather[0].icon);
      //    console.log(res.main.temp);
      //    console.log(res.cod);
      // });
   })

   const locationHandler = (location: string) => {
      let coords = location.split(', ');
      let latitude = +coords[0];
      let longitude = +coords[1];

      setLat(latitude);
      setLon(longitude);
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
                  date={date}
                  icon={icon}
                  temperature={temperature}/>
               <DateForecast cities={cities}/>
            </div>
         </div>
      </div>
   );
}

export default App;