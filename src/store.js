import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

const reduxDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);




let store = createStore(rootReducer, reduxDevTools);

export default store;
