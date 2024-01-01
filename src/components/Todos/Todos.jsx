import { useSelector } from "react-redux";
import "./Todos.scss";
import { TodoItem } from "..";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/todosSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={(id) => dispatch(toggleTodo(id))}
          onRemove={(id) => dispatch(removeTodo(id))}
        />
      ))}
    </div>
  );
}
