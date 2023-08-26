import Todolist from "./components/Todolist"
import TodoState from "./context/TodoState";

function App() {
  return (
    <>
      <TodoState>
        <Todolist />
      </TodoState>
    </>
  );
}

export default App;
