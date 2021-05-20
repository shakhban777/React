export type WeatherType = {
   id: number,
   icon: string,
   date: string,
   temperature: string
}

export default class WeatherService {
   _apiKey: string = '9f794cbee16169a67f1379107a9a4b6e';
   _baseURL: string = 'http://api.openweathermap.org/data/2.5/onecall';

   getResource = async (lat: number | null, lon: number | null): Promise<WeatherType[]> => {
      const urlToFetch: string = `${this._baseURL}?lat=${lat}&lon=${lon}&&exclude=current,minutely,hourly,alerts&appid=${
         this._apiKey
      }`;
      const response = await fetch(urlToFetch);

      if (!response.ok) {
         throw new Error(`Could not fetch ${urlToFetch}, received ${response.status}`)
      }

      const json = await response.json();
      const dataArrays = json.daily;

      let array: WeatherType[] = [];

      await dataArrays.forEach((day: { weather:[{icon: string}]; dt: number; temp: { day: number; }; }) => {
         const properties = {
            id: Math.random(),
            icon: `http://openweathermap.org/img/wn/${day.weather.find(el => el.icon)?.icon}@2x.png`,
            date: new Date(day.dt * 1000).toLocaleString("en",
               {year: 'numeric', month: 'short', day: "numeric"}),
            temperature: Math.floor(day.temp.day - 273.15).toString() + '°'
         }
         array.push(properties);
      })

      return array;
   }
}