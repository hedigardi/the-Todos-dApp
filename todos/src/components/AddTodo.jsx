import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add to the todo list"
        value={todoText}
        onChange={handleChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
};
