import  { createContext, useReducer, useContext, ReactNode } from 'react';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: number }
  | { type: 'DELETE_TASK'; payload: number };

type TaskContextType = {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const reducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(reducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// custom hook
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
};
