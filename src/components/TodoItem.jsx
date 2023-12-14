import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.todo);
  const [isCompleted, setIsCompleted] = useState(false);

  // DELETE TODO
  const deleteTodo = (todo) => {
    const newTodos = todos.filter((todoItem) => todoItem.id !== todo.id);
    setTodos(newTodos);
  };
  // EDIT TODO
  const editTodoHandler = () => {
    setEditable(true);
  };
  // SAVE TODO
  const saveTodoHandler = () => {
    const choosenTodo = todos.filter((todoItem) => todoItem.id == todo.id);
    console.log(choosenTodo[0]);
    const updatedTodos = todos.filter(
      (todoItem) => todoItem.id !== choosenTodo[0].id
    );
    setTodos([{ ...choosenTodo[0], todo: content }, ...updatedTodos]);
    setEditable(false);
  };

  const completedTodo = () => {
    setIsCompleted((prev) => (prev = !prev));
    if (isCompleted) {
      const completedTodo = todos.filter((todoItem) => todoItem.id == todo.id);
      const updatedTodos = todos.filter(
        (todoItem) => todoItem.id !== completedTodo[0].id
      );
      setTodos([{ ...completedTodo[0], isCompleted: true }, ...updatedTodos]);
    }
  };

  return (
    <>
      <li
        className="flex justify-between items-center border-black
     mb-5"
      >
        {editable ? (
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <div
            className={
              isCompleted
                ? `text-xl text-gray-500 line-through`
                : "text-xl outline-none placeholder:text-black bg-transparent"
            }
            onClick={completedTodo}
          >
            {todo.todo}
          </div>
        )}
        <div className="flex space-x-3">
          {editable ? (
            <button
              className="py-1 px-6 bg-green-600 text-white rounded-md "
              onClick={saveTodoHandler}
            >
              Kaydet
            </button>
          ) : (
            <button
              className="py-1 px-6 bg-green-600 text-white rounded-md "
              onClick={editTodoHandler}
            >
              Edit
            </button>
          )}
          <button
            className="py-1 px-4 bg-red-600 text-white rounded-md"
            onClick={() => deleteTodo(todo)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
