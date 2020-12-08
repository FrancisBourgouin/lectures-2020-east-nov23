# TODO LIST - THE PLAN !

## Functionality

- View all todos
- View a todo
- Add a todo
- Remove a todo
- Edit/Update a todo

## Data structure

[] {} ?

Array sad
[
  "I AM TASK",
  "I AM TASK",
  "I AM TASK"
]

Object good.
{
  a:"I AM TASK",
  b:"I AM TASK",
  c:"I AM TASK",
}
## Actions

showAllTodos = (todos) => {
  return todos
}

showOneTodo = (todos, key) => {
  return todos[key]
}

addTodo = (todos, newTodo) => {
  const newKey = Math.floor(Math.random() * 30)
  todos[newKey] = newTodo
}

removeTodo = (todos, key) => {
  delete todos[key]
}

editTodo = (todos, key, newTodo) => {
  todos[key] = newTodo
}

## Events CRUD

- Create  => POST    => addTodo 
- Read    => GET     => showOneTodo or showAllTodos
- Update  => PUT     => editTodo
- Delete  => DELETE  => removeTodo

## Routes & Events

- GET  /todos                 => showAllTodos (Read)
- GET  /todos/:todo_id        => showOneTodo (Read)
- POST /todos                 => addTodo (Create)
- POST /todos/:todo_id/update => editTodo (Update)
- POST /todos/:todo_id/delete => removeTodo (Delete)