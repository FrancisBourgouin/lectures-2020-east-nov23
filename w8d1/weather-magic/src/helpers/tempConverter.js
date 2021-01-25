
export const convertKelvinToCelsius = (tempInKelvin) => {
  const calculatedTemp = tempInKelvin - 273.15
  if (Number.isNaN(calculatedTemp)) {
    return null
  } else {
    return `${calculatedTemp}°C`
  }

}