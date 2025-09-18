import { useState } from "react";

export const TodoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="todobtn">
          Add Task
        </button>
      </form>
    </section>
  );
};
