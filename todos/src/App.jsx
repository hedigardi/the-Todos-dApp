import { useState, useEffect } from "react";
import { TodoService } from "./services/TodoService";
import TodosList from "./components/TodosList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    populateTodos();
  }, [todos]);

  const populateTodos = async () => {
    const fetchedTodos = await TodoService.getTodos();
    setTodos(fetchedTodos);
  };

  const addTodo = async (todoText) => {
    await TodoService.createTodo(todoText);
    populateTodos();
  };

  const toggleTodo = async (todoId) => {
    await TodoService.toggleTodo(todoId);
    populateTodos();
  };

  const deleteTodo = async (todoId) => {
    await TodoService.deleteTodo(todoId);
    populateTodos();
  };

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <TodosList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
