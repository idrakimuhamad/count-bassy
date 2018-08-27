import todosRedux from './todosRedux'

describe('todos redux', () => {
  it('should add a todo', () => {
    let description = 'Fix Kony'
    let state = todosRedux.reducer(undefined, todosRedux.actions.addTodo(description))
    let newTodo = state[0]

    expect(newTodo.description).toEqual(description)
  });

  it('should remove a todo by a given Id', () => {
    let state = [{
      id: 1,
      description: 'Throw kony',
      completed: false
    }]
    let newState = todosRedux.reducer(state, todosRedux.actions.removeTodo(1))

    expect(newState).toEqual([])
  })

  it('should update a todo by a given Id and props', () => {
    let state = [{
      id: 1,
      description: 'Throw kony',
      completed: false
    }]
    let newState = todosRedux.reducer(state, todosRedux.actions.updateTodo({
      id: 1,
      props: {
        completed: true
      }
    }))

    expect(newState[0].completed).toBeTruthy()
  })
});
