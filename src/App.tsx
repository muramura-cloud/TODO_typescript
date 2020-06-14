import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoDelete from './components/TodoDelete';
import { AppState } from './types/types';
import { Http2ServerRequest } from 'http2';


class App extends Component<{}, AppState> {
  ccontainer: React.CSSProperties = {
    textAlign: 'center'
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [
        { title: '一番目の課題', id: 0 },
        { title: '二番目の課題', id: 1 },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(title: string) {
    const { tasks, uniqueId } = this.state;
    //stateのコピーを作成
    tasks.push({
      title: title,
      id: uniqueId
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1
    });
  }
  deleteTodo() {
    this.setState({
      tasks: []
    });
  }

  render() {
    return (
      <div>
        <div style={this.ccontainer}>
          <h1>TODO App</h1>
          <TodoInput addTodo={this.addTodo} />
          <TodoList tasks={this.state.tasks} />
          <TodoDelete deleteTodo={this.deleteTodo} />
        </div>
      </div >
    );
  }
}

export default App;
