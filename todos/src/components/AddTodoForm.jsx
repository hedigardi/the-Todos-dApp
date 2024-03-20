import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add to the Todo list"
        value={todoText}
        onChange={handleChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
};

export default AddTodoForm;
