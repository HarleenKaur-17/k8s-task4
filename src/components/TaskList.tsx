type Task = {
  id: number;
  text: string;
  done: boolean;
};

// using custom props 
type Props = {
  tasks: Task[];
  dispatch: React.Dispatch<any>; // from useReducer
};

const TaskList = ({ tasks, dispatch }: Props) => {
  if (tasks.length === 0) return <p>No tasks for now!</p>;

  return (
    <ul className="task-list">
      {tasks.map(({ id, text, done }) => (
        <li key={id} className="task-item">
          <div className="task-left">
            <input
              type="checkbox"
              checked={done}
              onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: id })}
              id={`task-${id}`}
            />
            <label htmlFor={`task-${id}`} className={done ? 'completed' : ''}>
              {text}
            </label>
          </div>
          <button
            className="delete-btn"
            onClick={() => dispatch({ type: 'DELETE_TASK', payload: id })}
          >
            &#10005; 
          </button>
        </li>
      ))}
    </ul>
  );
};
//  &#10005 is code for X
export default TaskList;
