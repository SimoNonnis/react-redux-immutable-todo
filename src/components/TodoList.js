import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { List } from 'immutable';


import Todo from './Todo';

import styles from './TodoList.css';

class TodoList extends Component {
  createToDo (e) {
    e.preventDefault();
    const uid = () => Math.random().toString(34).slice(2);
    const text = this.getInput.value;
    const isLongEnough = text.length > 3;

    if (isLongEnough) {
      const todo = {
        id: uid(),
        isDone: false,
        text: text
      }
      this.props.addToDo(todo);
      this.addToDoForm.reset();
    }
  }

  handleClick (e) {
    const todoId = e.target.id;
    this.props.toggleToDo(todoId);
  }

  handleDelete (e) {
    const todoId = e.target.id;
    this.props.deleteToDo(todoId);
  }

  render () {
    return (
      <div styleName='container'>
        <h1 styleName='title'>Today's To Do List</h1>
        <form styleName='form' ref={input => this.addToDoForm = input} onSubmit={this.createToDo.bind(this)}>
          <input
            ref={input => this.getInput = input}
            type='text'
            placeholder='add ToDo'
            styleName='input'
          />
          <button styleName='addToDo' type='submit'>+ Add</button>
        </form>
        <ul styleName='list'>
          {this.props.todosList.map(t => (
            <Todo
              key={t.get('id')}
              isDone={t.get('isDone')}
              text={t.get('text')}
              handleClick={this.handleClick.bind(this)}
              handleDelete={this.handleDelete.bind(this)}
              id={t.get('id')}
            />
          ))}
        </ul>
      </div>
    )
  }




}











TodoList.propTypes = {
  todosList: PropTypes.instanceOf(List),
  addToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  deleteToDo: PropTypes.func
}

export default CSSModules(TodoList, styles, {allowMultiple: true});
