import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo, type TodoId } from './types'

const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
