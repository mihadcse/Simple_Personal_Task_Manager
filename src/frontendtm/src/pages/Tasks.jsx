import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 1,
    dueDate: '',
  });

  const username = localStorage.getItem('username'); // or from context

  useEffect(() => {
    fetchTasks();
  }, []);

  const authHeader = {
    auth: {
      username: 'admin',
      password: 'admin123',
    },
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/tasks/${username}`, authHeader);
      setTasks(res.data);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:8080/add-tasks/${username}`,
        { ...formData, completed: false },
        authHeader
      );

      setFormData({ title: '', description: '', priority: 1, dueDate: '' });
      alert('Task created successfully!');
      fetchTasks();
    } catch (err) {
      console.error('Failed to create task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`, authHeader);
      alert('Task deleted successfully!');
      fetchTasks();
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  return (
    <div className="pt-10 px-4 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-violet-50 p-6 border-2 border-violet-300 rounded mb-6">
        <h2 className="text-xl font-bold mb-4 text-center">Create Task</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded mb-3"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded mb-3"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="priority"
          min="1"
          max="5"
          className="w-full p-2 border rounded mb-3"
          value={formData.priority}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          className="w-full p-2 border rounded mb-4"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 font-semibold rounded hover:bg-green-600"
        >
          Add Task
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">Your Tasks</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 border rounded shadow-sm mb-3 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p className="text-sm">{task.description}</p>
              <p className="text-xs text-gray-500">
                Priority: {task.priority} | Due: {task.dueDate}
              </p>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
