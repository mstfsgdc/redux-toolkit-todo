import "./App.scss";
import { AddTodo, Footer, Header, Todos } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <AddTodo />
          <Todos />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
