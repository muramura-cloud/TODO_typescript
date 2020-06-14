import React, { Component } from 'react';
import { TodoInputProps, TodoInputState } from '../types/types';

class TodoInput extends Component<TodoInputProps, TodoInputState> {
    input = {
        border: '1px solid red'
    }

    constructor(props: TodoInputProps) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            input: e.target.value
        });
    }
    handleClick() {
        const inputValue: string = this.state.input
        this.props.addTodo(inputValue);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="todoを入力して下さい" style={this.input} onChange={this.onChange} value={this.state.input} />
                <button onClick={this.handleClick}>登録</button>
            </div>
        );
    }
}

export default TodoInput;