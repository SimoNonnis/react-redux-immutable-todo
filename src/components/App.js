import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { List, Map } from 'immutable';

import TodoList from './TodoList';

import styles from './App.css';

class App extends Component {
  constructor () {
    super();

    this.addToDo = this.addToDo.bind(this);
    this.toggleToDo = this.toggleToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);

    this.state = {
      data: List([
        Map({ id: '0', isDone: true,  text: 'Learn JavaScript' }),
        Map({ id: '1', isDone: false, text: 'Learn React' }),
        Map({ id: '2', isDone: false, text: 'Learn Redux' }),
        Map({ id: '3', isDone: false, text: 'Learn ImmutableJs' })
      ])
    }
  }

  addToDo (todo) {
    this.setState({
      data: this.state.data.push(Map(todo))
    })
  }

  toggleToDo (todoId) {
    console.log('Toggle: ' + todoId);
    // const { data } = this.state;
    // data.map((t, i) => {
    //   if (todoId == t.get('id')) {
    //     //data[i].isDone = !data[i].isDone
    //     //data[i].isDone = t.update('isDone', isDone => !isDone)
    //     this.setState({data})
    //   }
    // })
  }

  deleteToDo (todoId) {
    console.log('Delete: ' + todoId);
    // const { data } = this.state;
    // data.map((t, i) => {
    //   if (todoId == t.id) {
    //     delete data[i];
    //     this.setState({data})
    //   }
    // })
  }

  render () {
    return (
      <div styleName='container'>
          <TodoList
            todosList={this.state.data}
            addToDo={this.addToDo}
            toggleToDo={this.toggleToDo}
            deleteToDo={this.deleteToDo}
          />
      </div>
    )
  }

}


export default CSSModules(App, styles, {allowMultiple: true});
