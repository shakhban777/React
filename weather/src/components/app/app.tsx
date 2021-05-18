import React, {useState, useEffect} from 'react';
import Title from '../title/title';
import SevenDayForecast from '../seven-day-forecast/seven-day-forecast';
import './app.css';
import WeatherService from "../../api/api";

export type CityType = {
   name: string,
   lat: number,
   lan: number
};

const App: React.FC = () => {
   const [cities] = useState<CityType[]>([
      {name: 'Самара', lat: 53.195873, lan: 50.100193},
      {name: 'Тольятти', lat: 53.507836, lan: 49.420393},
      {name: 'Саратов', lat: 51.533557, lan: 46.034257},
      {name: 'Казань', lat: 55.796127, lan: 49.106405},
      {name: 'Краснодар', lat: 45.035470, lan: 38.975313}
   ]);
   const [lat, setLat] = useState<number | null>(null);
   const [long, setLong] = useState<number | null>(null);
   const [temperature, setTemperature] = useState<number | null>(null);
   const [icon, setIcon] = useState<string | null>(null);

   const weather = new WeatherService();

   useEffect(() => {
      weather.getResource(1, 1).then(res => {
         console.log(res.weather[0].icon);
         console.log(res.main.temp);
         console.log(res.cod);
      });
   })

   return (
      <div className='app'>
         <div className='_container'>
            <Title/>
            <SevenDayForecast cities={cities}/>
         </div>
      </div>
   );
}

export default App;