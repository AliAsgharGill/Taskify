import "./App.css";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/todos";

function App() {
  return (
    <>
      <Navbar />
      <h1>Taskify</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
