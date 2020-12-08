const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

// specify the static asset folder (css, images, etc)
app.use(express.static('public'));

app.use(bodyParser());

// Create the todo object
const todoObj = {
  1234: "A todo of something",
  1114: "Blow dry the cat",
  14: "Wash a fish",
  234: "Mop the sidewalk",
  1134: "Dump Fritos in Bone Broth"
}

// Create a randomizer function
const newKey = () => Math.floor(Math.random() * 3000)

// Create our actions


const showAllTodos = (todos) => {
  return todos
}

const showOneTodo = (todos, key) => {
  if (todos[key]) {
    return todos[key]
  } else {
    return null
  }
}

const addTodo = (todos, newTodo) => {
  todos[newKey()] = newTodo
}

const removeTodo = (todos, key) => {
  delete todos[key]
}

const editTodo = (todos, key, newTodo) => {
  todos[key] = newTodo
}



// using ejs for the views
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const templateName = 'home'
  res.render(templateName)
});

// Showing the todos
app.get('/todos', (req, res) => {
  // Prepare data
  const todos = showAllTodos(todoObj)

  // Prepare my template variables
  const templateVars = { todos }

  // Respond with a render of todos template
  res.render('todos', templateVars)
})

app.get('/api/todos', (req, res) => {
  // Prepare data
  const todos = showAllTodos(todoObj)

  // Respond with a render of todos template
  res.json(todos)
})

app.get('/todos/:todo_id', (req, res) => {
  // Prepare data
  const key = req.params.todo_id
  const todo = showOneTodo(todoObj, key)

  // Prepare my template variable
  const templateVars = { key, todo }

  // Respond with a render of todo
  res.render('todo', templateVars)
})

// Creating a todo
app.post('/todos', (req, res) => {
  console.log(req.body)
  const newTodo = req.body.todo
  addTodo(todoObj, newTodo)

  res.redirect('/todos') // GET
})

// Update & Delete a todo
app.post('/todos/:todo_id/update', (req, res) => {
  const key = req.params.todo_id
  const newTodo = req.body.todo
  editTodo(todoObj, key, newTodo)

  res.redirect(`/todos/${key}`)
})

app.post('/todos/:todo_id/delete', (req, res) => {
  const key = req.params.todo_id
  removeTodo(todoObj, key)

  res.redirect('/todos')
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


// /bob/:bob_id => /bob/1234 => req.params.bob_id => 1234