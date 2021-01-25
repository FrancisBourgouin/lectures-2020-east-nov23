import React from 'react'

export default function CityListItem(props) {

  return (<li onClick={() => props.setCity(props.name)}>{props.name}</li>)
}