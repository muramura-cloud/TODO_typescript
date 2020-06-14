import React, { Component } from 'react';
import { TodoDeleteProps } from '../types/types';

class TodoDelete extends Component<TodoDeleteProps, {}> {
    btn = {
        border: 'solid 1px black'
    }

    constructor(props: TodoDeleteProps) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.props.deleteTodo();
    }

    render() {
        return (
            <button onClick={this.delete} style={this.btn}>TODOリストを削除</button>
        );
    }
}

export default TodoDelete;