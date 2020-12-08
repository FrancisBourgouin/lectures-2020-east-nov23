- GET  /todos                 => showAllTodos (Read)
- GET  /todos/:todo_id        => showOneTodo (Read)
- POST /todos                 => addTodo (Create)
- POST /todos/:todo_id/update => editTodo (Update)
  This route needs the todo id and a string with the new todo value
- POST /todos/:todo_id/delete => removeTodo (Delete)