type WeatherApiType = {
   id: number,
   icon: string,
   date: string,
   temperature: string
}

export default class WeatherApiService {
   _apiKey: string = '9f794cbee16169a67f1379107a9a4b6e';
   _baseURL: string = 'https://api.openweathermap.org/data/2.5/onecall';

   symbolOfWeather = (temperature: number) => {
      if (temperature - 273.15 > 0) {
         return '+';
      } else if (temperature - 273.15 < 0) {
         return '-';
      } else {
         return '';
      }
   }

   fetchToServer = async (urlToFetch: string) => {
      const dataFromServer = await fetch(urlToFetch);

      if (!dataFromServer.ok) {
         throw new Error(`Could not fetch ${dataFromServer}, received ${dataFromServer.status}`);
      }

      return await dataFromServer.json();
   }

   getWeatherForSevenDays = async (lat: number, lon: number): Promise<WeatherApiType[]> => {
      const weatherForSevenDaysUrlToFetch: string = `${this._baseURL}?lat=${lat}&lon=${lon}&&exclude=current,minutely,hourly,alerts&appid=${
         this._apiKey
      }`;

      const weatherDataForSevenDaysJson = await this.fetchToServer(weatherForSevenDaysUrlToFetch);
      const weatherForSevenDaysArrays = weatherDataForSevenDaysJson.daily;

      return weatherForSevenDaysArrays.map((day: { weather: [{ icon: string }]; dt: number; temp: { day: number; }; }) => {
         const symbolOfWeather: string = this.symbolOfWeather(day.temp.day);
         return {
            id: day.dt,
            icon: `https://openweathermap.org/img/wn/${day.weather.find(el => el.icon)?.icon}@2x.png`,
            date: new Date(day.dt * 1000)
               .toLocaleString("en", {year: 'numeric', month: 'short', day: "numeric"})
               .split(', ')
               .join(' '),
            temperature: symbolOfWeather + Math.round(day.temp.day - 273.15).toString() + '°'
         };
      });
   }

   getWeatherForHistoricDate = async (lat: number, lon: number, date: number) => {
      const weatherForHistoricDateUrlToFetch: string = `${this._baseURL}/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${this._apiKey}`;
      try {
         const weatherForHistoricDateJson = await this.fetchToServer(weatherForHistoricDateUrlToFetch);
         const weatherOfHistoricDay = weatherForHistoricDateJson.current;
         const symbolOfWeather: string = this.symbolOfWeather(weatherOfHistoricDay.temp);

         return {
            icon: `https://openweathermap.org/img/wn/${weatherOfHistoricDay.weather[0].icon}@2x.png`,
            date: new Date(weatherOfHistoricDay.dt * 1000).toLocaleString("en",
               {year: 'numeric', month: 'short', day: "numeric"}).split(', ').join(' '),
            temperature: `${symbolOfWeather}${Math.round(weatherOfHistoricDay.temp - 273.15).toString()}°`
         };
      } catch (error) {
         console.error(error);
         return {
            icon: '',
            date: '',
            temperature: ''
         }
      }
   }
}