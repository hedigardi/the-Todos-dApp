const TodosList = ({ todos, toggleTodo, deleteTodo }) => {
  const handleCheckboxChange = async (todoId) => {
    toggleTodo(todoId);
  };

  const handleDeleteClick = async (todoId) => {
    deleteTodo(todoId);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? "completed" : ""}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => handleDeleteClick(todo.id)} className="btn-delete">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
