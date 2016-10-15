// action
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

// helper
const uID = Math.random().toString(32).slice(2);

// action creator
export function addToDo (text) {
  return {
    type: ADD_TODO,
    payload: {
      id: uID(),
      isDone: false,
      text: text
    }
  }
}

export function toggleToDo (todoId) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: todoId
    }
  }
}

export function deleteToDo (todoId) {
  return {
    type: DELETE_TODO,
    payload: {
      id: todoId
    }
  }
}
