import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/tasks" className="nav-link">Tasks</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
};

export default App;
