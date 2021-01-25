import React, { useEffect, useState } from 'react';
import './App.css';

import Weather from './components/Weather'
import CityList from './components/CityList'

const key = "09fd719b4b698ec0260e424f83378e3d"

const App = () => {
  const [selectedCity, setSelectedCity] = useState("")
  const mtlData =
  {
    "coord": { "lon": -73.59, "lat": 45.51 },
    "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }],
    "base": "stations",
    "main": { "temp": 287.04, "feels_like": 298.69, "temp_min": 295.93, "temp_max": 298.71, "pressure": 1016, "humidity": 73 }, "visibility": 10000, "wind": { "speed": 2.1, "deg": 250 }, "clouds": { "all": 75 },
    "dt": 1597072210,
    "sys": { "type": 1, "id": 943, "country": "CA", "sunrise": 1597052975, "sunset": 1597104590 },
    "timezone": -14400, "id": 6077243, "name": "Montreal", "cod": 200
  }
  const cityList = ["Montréal", "Ottawa", "Toronto", "Waterloo", "Atlanta", "Magnitogorsk"]

  const asyncSetSelectedCity = (name) => {
    setTimeout(() => setSelectedCity(name), 1000)
  }
  return (
    <div className="App">
      <h1>☔⚡🌞 Weather Magic 🌞⚡☔</h1>
      <CityList cityList={cityList} setSelectedCity={asyncSetSelectedCity} />
      {selectedCity && <Weather city={selectedCity} weatherData={mtlData} />}
    </div>
  );
}

export default App;
