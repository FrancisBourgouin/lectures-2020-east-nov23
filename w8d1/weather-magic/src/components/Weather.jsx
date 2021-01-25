import React from 'react'
import { convertKelvinToCelsius } from '../helpers/tempConverter'

export default function Weather(props) {
  const parsedTemperature = convertKelvinToCelsius(props.weatherData.main.temp)
  return (
    <section data-testid="weather-component">
      <h1>Current weather data for {props.city}</h1>
      <ul>
        <li data-testid="weather-temp">Temperature {parsedTemperature}</li>
        <li>Weather is {props.weatherData.weather[0].description}</li>
      </ul>
    </section>
  )
}