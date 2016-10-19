import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

import TodoList from './TodoList';

import styles from './App.css';


const mapStateToProps = (state) => ({ data: state.data })
const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);
const WrapperToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

const App = () => (
  <div styleName='container'>
      <WrapperToDoList />
  </div>
);

export default CSSModules(App, styles, {allowMultiple: true});
