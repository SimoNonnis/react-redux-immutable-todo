const initialState = {
  data: [
    { id: '0', isDone: true,  text: 'Learn JavaScript' },
    { id: '1', isDone: false, text: 'Learn React' },
    { id: '2', isDone: false, text: 'Learn Redux' },
    { id: '3', isDone: false, text: 'Learn ImmutableJs' }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        data: [
          ...state.data,
          action.payload
        ]
      })
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        data: state.data.map(todo => {
          if (action.payload.id === todo.id) {
            return Object.assign({}, todo, {
              isDone: !todo.isDone
            })
          } else {
            return todo
          }
        })
      })
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        data: state.data.filter(todo => action.payload.id !== todo.id)
      })
    default:
      return state
  }
};

export default rootReducer;
