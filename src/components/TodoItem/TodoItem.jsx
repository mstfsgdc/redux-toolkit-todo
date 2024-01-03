/* eslint-disable react/prop-types */
import "./TodoItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <FontAwesomeIcon icon={faTrash} onClick={() => onRemove(todo.id)} className="deleteIcon" />
    </div>
  );
};

export default Todo;
