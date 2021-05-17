import React, {useState} from 'react';
import Title from '../title/title';
import SevenDayForecast from '../seven-day-forecast/seven-day-forecast';
import './app.css';

const App: React.FC = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [temperature, setTemperature] = useState('');

  return (
    <div className='app'>
      <div className='_container'>
        <Title/>
        <SevenDayForecast/>
      </div>
    </div>
  );
}

export default App;