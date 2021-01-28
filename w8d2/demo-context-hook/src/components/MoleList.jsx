import Mole from './Mole'

export default function MoleList(props) {
  const { setUser } = props
  return (
    <section>
      I am the Mole list
      <ul>
        <li><Mole setUser={setUser} /></li>
      </ul>
    </section>
  )
}