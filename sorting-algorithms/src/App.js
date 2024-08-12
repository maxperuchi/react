import './assets/global.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import BubbleSort from './pages/BubbleSort/BubbleSort';
import ShakeSort from './pages/ShakeSort/ShakeSort';
import CombSort from './pages/CombSort/CombSort';

function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <ul>
          <h3>Sorting Algorithms</h3>
          <li><Link to="/bubblesort">BubbleSort</Link></li>
          <li><Link to="/shakesort">ShakeSort</Link></li>
          <li><Link to="/combsort">CombSort</Link></li>
        </ul>
      </nav>
      <div className="Pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bubblesort" element={<BubbleSort />} />
          <Route path="/shakesort" element={<ShakeSort />} />
          <Route path="/combsort" element={<CombSort />} />
        </Routes>
      </div>
    </div>)
}

export default App;
