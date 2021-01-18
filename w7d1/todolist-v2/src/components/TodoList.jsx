import TodoListItem from './TodoListItem'

export default function TodoList(props) {
  const { todoListData } = props

  let parsedTodoList = []

  if (Array.isArray(todoListData)) {
    parsedTodoList = todoListData.map(todo => <TodoListItem key={todo.id} {...todo} />)
  }

  // Or

  parsedTodoList = Array.isArray(todoListData) && todoListData.map(todo => <TodoListItem key={todo.id} {...todo} />)

  return (
    <ul>
      {parsedTodoList.length ? parsedTodoList : <TodoListItem complete={false} description="Add todo to the list" />}
    </ul>
  )
}