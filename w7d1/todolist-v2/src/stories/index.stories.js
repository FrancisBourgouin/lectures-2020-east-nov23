import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TodoListItem from '../components/TodoListItem'
import TodoList from '../components/TodoList'

const completeItem = { id: 1, complete: true, description: "Look at the horrible hedgehog cake" }
const incompleteItem = { id: 2, complete: false, description: "Dance like a chicken would do in the Pampa" }

storiesOf('Todolist Item', module)
  .add("Incomplete", () => <TodoListItem {...incompleteItem} />)
  .add("Complete", () => <TodoListItem {...completeItem} />)

const todoListData = [completeItem, incompleteItem]

storiesOf('Todo list', module)
  .add("Undefined list", () => <TodoList />)
  .add("Empty list", () => <TodoList todoListData={[]} />)
  .add("Populated list", () => <TodoList todoListData={todoListData} />)