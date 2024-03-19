const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleCheckboxChange = async (todoId) => {
    toggleTodo(todoId);
  };

  const handleDeleteClick = async (todoId) => {
    deleteTodo(todoId);
  };

  return (
    <li>
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
  );
};

export default TodoItem;
