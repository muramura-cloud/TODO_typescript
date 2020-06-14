import React, { Component } from 'react';
import { TodoListProps } from '../types/types';
import TodoItem from './TodoItem';

class TodoList extends Component<TodoListProps, {}> {
    ul = {
        listStyle: 'none'
    }

    render() {
        const list = this.props.tasks.map((todo) => {
            return (
                <TodoItem {...todo} key={todo.id} />
            );
        });
        return (
            <div>
                <ul style={this.ul}>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TodoList;