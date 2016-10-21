import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Todo from './Todo';

import styles from './TodoList.css';

class TodoList extends Component {
  createToDo (e) {
    e.preventDefault();

    const text = this.getInput.value;
    const isLongEnough = text.length > 3;

    if (isLongEnough) {
      // helper
      const uID = Math.random().toString(32).slice(2);

      this.props.addToDo(text, uID);
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
        <form styleName='form' ref={ref => this.addToDoForm = ref} onSubmit={this.createToDo.bind(this)}>
          <input
            ref={ref => this.getInput = ref}
            type='text'
            placeholder='add ToDo'
            styleName='input'
          />
          <button
            styleName='addToDo'
            type='submit'
          >+ Add</button>
        </form>
        {this.props.data ?
          (<ul styleName='list'>
            {this.props.data.map(t => (
              <Todo
                key={t.id}
                isDone={t.isDone}
                text={t.text}
                handleClick={this.handleClick.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                id={t.id}
              />
            ))}
          </ul>)
          : null
        }
      </div>
    )
  }
}




TodoList.propTypes = {
  data: PropTypes.array,
  addToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  deleteToDo: PropTypes.func
}

export default CSSModules(TodoList, styles, {
  allowMultiple: true,
  errorWhenNotFound: false
});
