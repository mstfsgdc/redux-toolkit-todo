import { useSelector } from "react-redux";
import "./App.scss";
import { AddTodo, Footer, Header, Todos } from "./components";

function App() {
  const todos = useSelector((state) => state.todos);
  
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <AddTodo />
          {todos.length > 0 && <Todos />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
