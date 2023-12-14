import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const [todo, setTodo] = useState({});

  const data = {
    todos,
    setTodos,
    todo,
    setTodo,
  };
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};

TodoProvider;
