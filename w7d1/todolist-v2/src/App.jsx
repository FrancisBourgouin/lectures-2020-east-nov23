import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const todoListData = [
    { id: 0, complete: false, description: "Bake hedgehog cake" },
    { id: 1, complete: false, description: "Feed the rabbit" },
    { id: 2, complete: true, description: "Drop it like its hot" },
    { id: 3, complete: false, description: "Clean up Ferret's poop :D" },
    { id: 4, complete: false, description: "Knit a sweater for the ferret" },
    { id: 5, complete: false, description: "Look at Ryan's ferret pics" },
  ]

  return (
    <div className="App">
      <h1>The super todo list life!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut delectus aliquid necessitatibus asperiores impedit
      sint odit praesentium magni debitis laborum eius optio maxime error cupiditate quo autem, distinctio deserunt iusto.
      </p>
      <TodoList todoListData={todoListData} />
    </div>
  );
}

export default App;
