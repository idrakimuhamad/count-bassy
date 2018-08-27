import autodux from 'autodux'
import { generate } from 'shortid'

let todosRedux = autodux({
  slice: 'todos',
  initial: [],
  actions: {
    addTodo: (state, description) => [ ...state, {
      id: generate(),
      description,
      completed: false
    }],
    removeTodo: (state, id) => state.filter(todo => todo.id !== id),
    updateTodo: (state, { id, props }) => state.map(todo => todo.id === id ? { ...todo, ...props} : todo)
  }
})

export default todosRedux
