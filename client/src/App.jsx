import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    try {
      const res = await axios.post('/api/tasks', taskData);
      setTasks([res.data, ...tasks]);
    } catch (err) {
      console.error('Error adding task', err);
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, updatedData);
      setTasks(tasks.map(t => t._id === id ? res.data : t));
    } catch (err) {
      console.error('Error updating task', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>Organize your work with style.</p>
      </header>
      <main className="app-content">
        <TaskForm onAdd={addTask} />
        {loading ? (
          <div className="loader">Loading tasks...</div>
        ) : (
          <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
        )}
      </main>
    </div>
  );
}

export default App;
