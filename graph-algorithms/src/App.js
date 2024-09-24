import './assets/global.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bfs from './pages/Bfs/Bfs';

function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <ul>
          <h3>Graph Algorithms</h3>
          <li><Link to="/bfs">BFS</Link></li>
        </ul>
      </nav>
      <div className="Pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bfs" element={<Bfs />} />
        </Routes>
      </div>
    </div>)
}

export default App;
