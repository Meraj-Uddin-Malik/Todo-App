import { TodoItem } from "./TodoItem";

export const TodoList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <section className="myUnOrdList">
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))}
      </ul>
    </section>
  );
};
