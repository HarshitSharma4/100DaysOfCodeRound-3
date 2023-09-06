import "./App.css";
import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

function App() {
  const [Todolist, setTodolist] = useState([]);
  const [newTask, setNewtask] = useState("");
  const handleChange = (event) => {
    setNewtask(event.target.value);
  };
  const addTask = () => {
    let task = {
      id: Todolist.length === 0 ? 1 : Todolist[Todolist.length - 1].id + 1,
      taskName: newTask,
      status: false,
    };
    setTodolist([...Todolist, task]);
  };
  const deleteTask = (taskid) => {
    let newList = Todolist.filter((task) => task.id !== taskid);
    setTodolist(newList);
  };
  const toggleStatus = (taskid) => {
    Todolist.forEach((task) => {
      if (task.id === taskid) task.status = !task.status;
    });
    console.log(Todolist);
  };
  return (
    <div className="App">
      <header className="container">
        <div className="inputTask">
          <input
            type="text"
            placeholder="Enter a task"
            onChange={handleChange}
          />
          <button className="add-task" onClick={addTask}>
            <FaPlus />
          </button>
        </div>
        <div className="todo-list">
          {Todolist.map((task) => {
            return (
              <Task
                id={task.id}
                taskName={task.taskName}
                status={task.status}
                deleteTask={deleteTask}
                toggleStatus={toggleStatus}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

const Task = (props) => {
  return (
    <div className="list-item">
      <h1>{props.taskName}</h1>
      <div>
        <button className="status" onClick={() => props.toggleStatus(props.id)}>
          <FaCheck />
        </button>
        <button className="cencel" onClick={() => props.deleteTask(props.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default App;
