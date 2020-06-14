import React, { Component } from 'react';
import { TodoItemProps } from '../types/types';

class TodoItem extends Component<TodoItemProps, {}> {
    render() {
        return (
            <li>
                {this.props.title}
            </li>
        );
    }
}

export default TodoItem;