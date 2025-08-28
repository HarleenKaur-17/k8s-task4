import  { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskList from '../components/TaskList';

const Tasks = () => {
  const { tasks, dispatch } = useTasks(); // using custom hook here
  const [newTask, setNewTask] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    dispatch({ type: 'ADD_TASK', payload: newTask.trim() });
    setNewTask('');
  };

  return (
    <div className="app-container">
      <h1>Tasks</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
};

export default Tasks;
