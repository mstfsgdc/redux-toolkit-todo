/* eslint-disable react/prop-types */
import { Button } from "../../components";
import "./TodoItem.scss";

const Todo = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <Button onClick={() => onRemove(todo.id)}>Remove</Button>
    </div>
  );
};

export default Todo;
