export type Task = {
    title: string;
    id: number;
}

export type AppState = {
    tasks: Task[];
    uniqueId: number;
}

export type TodoInputProps = {
    addTodo: (title: string) => void;
}
export type TodoInputState = {
    input: string;
}

export type TodoListProps = {
    tasks: Task[]
}

export type TodoItemProps = {
    title: string;
    id: number;
}

export type TodoDeleteProps = {
    deleteTodo: () => void;
}