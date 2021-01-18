import './TodoListItem.css'

export default function TodoListItem(props) {
  const { description, complete } = props

  return <li className={complete ? "complete" : ""}>{description}</li>
}