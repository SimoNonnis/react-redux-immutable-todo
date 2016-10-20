// action
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
// const DELETE_TODO = 'DELETE_TODO';


// action creator
export function addToDo (text, uID) {
  return {
    type: ADD_TODO,
    payload: {
      id: uID,
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
//
// export function deleteToDo (todoId) {
//   return {
//     type: DELETE_TODO,
//     payload: {
//       id: todoId
//     }
//   }
// }
