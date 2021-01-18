import TodoListItem from "./TodoListItem"

export default function TodoList(props) {
  const { todoListData } = props

  // const parsedTodoList = todoListData.map(todo =>
  //   <li
  //     key={todo.id}
  //     className={todo.complete ? "complete" : ""}
  //   >
  //     {todo.description}
  //   </li>
  // )

  // const parsedTodoList = todoListData.map(todo => <TodoListItem todo={todo}/>)
  // const parsedTodoList = todoListData.map(todo => 
  //   <TodoListItem 
  //     id={todo.id} 
  //     description={todo.description} 
  //     complete={todo.complete}
  //   />)
  //   const parsedTodoList = todoListData.map(todo => TodoListItem({...todo}))

  const parsedTodoList = todoListData.map(todo => <TodoListItem key={todo.id} {...todo} />)
  return (
    <ul>
      {parsedTodoList}
    </ul>
  )
}