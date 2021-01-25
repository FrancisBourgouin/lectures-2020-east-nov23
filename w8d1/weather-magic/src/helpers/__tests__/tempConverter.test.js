import { convertKelvinToCelsius } from '../tempConverter'

describe("Kelvin to Celsisus conversion", () => {
  it("Should return 0°C given the value of 273.15", () => {
    const result = convertKelvinToCelsius(273.15)

    expect(result).toBe("0°C")
  })
  it("Should return null given the value of \"Very hot\"", () => {
    const result = convertKelvinToCelsius("Very hot")

    expect(result).toBe(null)
  })
})