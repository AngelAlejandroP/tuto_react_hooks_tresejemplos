import React from "react";
import useTodos from "./hooks/useTodos";

const initialTodos = [
    {id: 1, title: 'Aprender React'},
    {id: 2, title: 'Aprender NODE'},
]

const TodoApp = () => {
    const [todos, addTodo, deleteTodo] = useTodos(initialTodos);
   
    return (
        <div>
            <h1>Todo App</h1>
            <button onClick={() => addTodo({title: 'Nueva tarea'})}>
                Add
            </button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;