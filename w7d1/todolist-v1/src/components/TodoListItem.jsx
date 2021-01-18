// Considering that we receive it like : <TodoListItem todo={todo}/>

// export default function TodoListItem(props) {
//   const complete = props.todo.complete
//   const description = props.todo.description
//   return (
//     <li
//       className={complete ? "complete" : ""}
//     >
//       {description}
//     </li>
//   )
// }

// Considering that we receive it like :<TodoListItem id={todo.id} description={todo.description} complete={todo.complete}/>
// Considering that we receive it like :<TodoListItem {...todo} />

export default function TodoListItem(props) {
  // const complete = props.complete
  // const description = props.description

  const { complete, description } = props
  return (
    <li
      className={complete ? "complete" : ""}
    >
      {description}
    </li>
  )
}