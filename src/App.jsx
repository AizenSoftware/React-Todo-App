import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="w-1/2 mx-auto flex flex-col justify-center items-center mt-10 border shadow-xl p-4 rounded-lg">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
