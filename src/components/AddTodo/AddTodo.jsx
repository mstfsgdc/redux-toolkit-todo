import "./AddTodo.scss";
import { useState } from "react";
import { addTodo } from "../../redux/todosSlice";
import { useDispatch } from "react-redux";
import { Button } from "../../components";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="addtodo">
      <input
        type="text"
        placeholder="Add todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        autoFocus
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleAddTodo}>Add</Button>
    </div>
  );
}
