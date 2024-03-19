import { useState, useEffect } from "react";
import { TodoService } from "./services/TodoService";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    populateTodos();
  }, []);

   useEffect(() => {
    const updateTodos = async () => {
      await populateTodos();
    };
    updateTodos();
  }, [todos]);

  const populateTodos = async () => {
    const fetchedTodos = await TodoService.getTodos();
    setTodos(fetchedTodos);
  };

  const addTodo = async (todoText) => {
    const success = await TodoService.createTodo(todoText);
    if (success) {
      populateTodos();
    } else {
      console.error("Failed to add todo");
    }
  };

  const toggleTodo = async (todoId) => {
    const success = await TodoService.toggleTodo(todoId);
    if (success) {
      populateTodos();
    } else {
      console.error("Failed to toggle todo");
    }
  };

  const deleteTodo = async (todoId) => {
    const success = await TodoService.deleteTodo(todoId);
    if (success) {
      populateTodos();
    } else {
      console.error("Failed to delete todo");
    }
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
