import React from 'react'
import { render } from '@testing-library/react'
import CityList from '../CityList'

describe("Testing the CityList and making sure it's returning a list or an appropriate message", () => {
  it("Given an array of cities, a list of li is rendered with all the city names", () => {
    const cityList = ["Montréal", "Ottawa", "Toronto", "Waterloo", "Atlanta", "Magnitogorsk"]

    const { getByText } = render(<CityList cityList={cityList} />)

    for (const city of cityList) {
      expect(getByText(city)).toBeInTheDocument()
    }

  })
  it("Given anything else but an array, component should show an error message", () => {
    const cityList = "Potato"

    const { getByText } = render(<CityList cityList={cityList} />)

    expect(getByText("This is not a valid list of cities.")).toBeInTheDocument()

  })
})