import { createStore } from 'redux';
import rootReducer from './reducers';

//import { addToDo, toggleToDo, deleteToDo } from './actions';

let store = createStore(rootReducer);

export default store;
