import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  const addTask = () => {
    if(newTask){
      setTodoList([...todoList, {id: Date.now(), text: newTask, isCompleted: false}]);
      setNewTask("");
    }
  }
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }
  const toggleTaskCompletion = (id) => {
    console.log("Toggle Task Completion", id);
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }
  const editTheText = (taskId, TaskText) => {
    setEditingTaskId(taskId);
    setEditingTaskText(TaskText);
  }
  const saveEditTask = (taskId) => {
    setTodoList(
      todoList.map((task) =>
        task.id === taskId ? { ...task, text: editingTaskText } : task
      )
    );
    setEditingTaskId(null);
    setEditingTaskText("");
  }
  const cancelEditTask = () => {
    setEditingTaskId(null);
    setEditingTaskText("");
  }
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {todoList.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                />
                <button onClick={saveEditTask}>Save</button>
                <button onClick={cancelEditTask}>Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTaskCompletion(task.id)}>
                  {task.text}
                </span>
                <button onClick={() => editTheText(task.id, task.text)}>
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
