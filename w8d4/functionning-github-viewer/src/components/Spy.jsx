import { useEffect } from "react"


export default function Spy(props) {

  useEffect(() => {
    const report = (event) => console.log(`Target has clicked on ${event}`)
    document.addEventListener('click', report)

    return () => document.removeEventListener('click', report)
  }, [])
  return (
    <h1>I AM A SPY</h1>
  )
}