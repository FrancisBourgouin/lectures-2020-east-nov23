import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe("Testing the relationship between citylist and the weather component", () => {
  it("It should not show the Weather component on first load", () => {
    const { getByTestId, queryByTestId } = render(<App />)

    const fetchedWeatherComponent = queryByTestId('weather-component')

    expect(fetchedWeatherComponent).not.toBeInTheDocument()
  })
  it("It should show the Weather component after a clicking action on a city", async () => {
    const { getByTestId, queryByTestId, getByText, findByTestId } = render(<App />)

    expect(queryByTestId('weather-component')).not.toBeInTheDocument()

    // click !

    fireEvent.click(getByText('Montréal'))


    // expect(queryByTestId('weather-component')).toBeInTheDocument()

    const result = await findByTestId('weather-component')
    console.log(result)
    expect(result).toBeInTheDocument()

  })
})