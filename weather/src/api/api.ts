type ResponseType = {
   weather: [
      {
         icon: string
      }
   ],
   main: {
      temp: number
   },
   cod: number
};

export default class WeatherService {
   _apiKey: string = '9f794cbee16169a67f1379107a9a4b6e';
   _baseURL: string = 'http://api.openweathermap.org/data/2.5/weather';

   getResource = async (lat: number, lon: number): Promise<ResponseType> => {
      const urlToFetch: string = `${this._baseURL}?lat=${lat}&lon=${lon}&lang=ru&appid=${
         this._apiKey
      }`;
      const response = await fetch(urlToFetch);

      if (!response.ok) {
         throw new Error(`Could not fetch ${urlToFetch}, received ${response.status}`)
      }

      return await response.json();
   }
}