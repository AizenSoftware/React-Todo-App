import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/todoContext";

const TodoForm = () => {
  const { todos, setTodos, todo, setTodo } = useContext(TodoContext);

  const inputValueHandler = (e) => {
    setTodo({
      id: Math.random(),
      todo: e.target.value,
      isCompleted: false,
    });
  };

  // ADD TODO
  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo({ todo: "" });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-6">TODO APP</h1>
      <form onSubmit={addTodoHandler}>
        <input
          className="p-1 outline-none rounded-sm"
          type="text"
          placeholder="add todo..."
          onChange={(e) => inputValueHandler(e)}
          value={todo.todo}
        />
        <button className="p-1 text-white bg-green-600 rounded-r-md px-4 hover:bg-green-500">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
