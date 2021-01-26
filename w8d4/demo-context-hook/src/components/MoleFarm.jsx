import MoleList from "./MoleList";

export default function MoleFarm(props) {
  const { setUser } = props
  return (
    <section>
      <h1>I am the mole farm</h1>
      <MoleList setUser={setUser} />
    </section>
  )
}