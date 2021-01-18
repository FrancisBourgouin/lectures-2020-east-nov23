import './App.css';
import Title from './components/Title'
import TodoList from './components/TodoList'

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
      {/* {Title()} */}
      <Title />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis aperiam ipsa accusantium iste? Vero officia quaerat, libero ut beatae, doloremque facere officiis fugiat modi delectus sint, repudiandae placeat magnam.</p>
      <TodoList todoListData={todoListData} />
    </div>
  );
}

export default App;
