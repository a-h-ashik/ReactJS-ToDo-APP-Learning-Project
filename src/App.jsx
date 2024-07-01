import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const inputHandler = (name, date) => {
    const newTask = {
      name: name,
      dueDate: date
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  const deleteHandler = (name) => {
    const newTasks = []
    for (let i of tasks) {
      if (i.name !== name) {
        newTasks.push(i);
      }
    }
    setTasks(newTasks);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo inputHandler={inputHandler} />
      <TodoItems tasks={tasks} deleteHandler={deleteHandler} />
    </center>
  );
}

export default App;
