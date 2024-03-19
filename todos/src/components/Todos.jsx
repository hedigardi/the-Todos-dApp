export const Todos = ({ todos, toggleTodo, deleteTodo }) => {
  const handleCheckboxChange = async (todoId) => {
    toggleTodo(todoId);
  };

  const handleDeleteClick = async (todoId) => {
    deleteTodo(todoId);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
