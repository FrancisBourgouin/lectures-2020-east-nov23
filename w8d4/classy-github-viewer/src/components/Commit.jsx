export default function Commit(props) {
  return (
    <article>
      <h1>{props.commitData.commit.message}</h1>
      <h2>{props.commitData.commit.author.date}</h2>
    </article>
  )
}