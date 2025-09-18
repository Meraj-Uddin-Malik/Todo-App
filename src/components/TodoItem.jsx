import { useState } from "react";
import { MdCheck, MdDelete, MdEdit } from "react-icons/md";

export const TodoItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
        />
      ) : (
        <span>{task.text}</span>
      )}

      {/* Toggle Complete Button */}
      <button className="check-btn" onClick={() => toggleComplete(task.id)}>
        <MdCheck />
      </button>

      {/* Edit Button */}
      <button className="edit-btn" onClick={handleEdit}>
        <MdEdit />
      </button>

      {/* Delete Button */}
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <MdDelete />
      </button>
    </li>
  );
};
