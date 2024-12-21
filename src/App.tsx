import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import './app.css';

const App = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <TodoList />
    </div>
  )
}

export default App;