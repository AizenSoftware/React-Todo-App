import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/todoContext";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <>
      <ul className="w-full mt-10">
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} />
        ))}

        {todos.length > 0 ? (
          <button
            className="py-1 px-4 bg-red-600 text-white rounded-md"
            onClick={() => setTodos([])}
          >
            All Clear
          </button>
        ) : (
          <p className="text-xl text-center font-medium">There is no todo...</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
