import "./AddTodo.scss";

export default function AddTodo() {
  return (
    <div className="addtodo">
      <input type="text" placeholder="Add todo..." />
      <button>Add</button>
    </div>
  );
}
