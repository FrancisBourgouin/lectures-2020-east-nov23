import React from 'react'
import CityListItem from './CityListItem'

export default function CityList(props) {
  let parsedCities
  if (Array.isArray(props.cityList)) {
    parsedCities = props.cityList.map(name => (
      <CityListItem
        key={name}
        name={name}
        setCity={props.setSelectedCity}
      />)
    )
  }
  return (
    <>
      {parsedCities && <ul>{parsedCities}</ul>}
      {!parsedCities && <p>This is not a valid list of cities.</p>}
    </>
  )
}