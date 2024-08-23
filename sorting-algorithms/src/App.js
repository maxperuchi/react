import './assets/global.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import BubbleSort from './pages/BubbleSort/BubbleSort';
import ShakeSort from './pages/ShakeSort/ShakeSort';
import CombSort from './pages/CombSort/CombSort';
import BucketSort from './pages/BucketSort/BucketSort';
import InsertionSort from './pages/InsertionSort/InsertionSort';
import HeapSort from './pages/HeapSort/HeapSort';
import SelectionSort from './pages/SelectionSort/SelectionSort';

function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <ul>
          <h3>Sorting Algorithms</h3>
          <li><Link to="/bubblesort">BubbleSort</Link></li>
          <li><Link to="/shakesort">ShakeSort</Link></li>
          <li><Link to="/combsort">CombSort</Link></li>
          <li><Link to="/bucketsort">BucketSort</Link></li>
          <li><Link to="/insertionsort">InsertionSort</Link></li>
          <li><Link to="/selectionsort">SelectionSort</Link></li>
          <li><Link to="/heapsort">HeapSort</Link></li>
        </ul>
      </nav>
      <div className="Pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bubblesort" element={<BubbleSort />} />
          <Route path="/shakesort" element={<ShakeSort />} />
          <Route path="/combsort" element={<CombSort />} />
          <Route path="/bucketsort" element={<BucketSort />} />
          <Route path="/insertionsort" element={<InsertionSort />} />
          <Route path="/selectionsort" element={<SelectionSort />} />
          <Route path="/heapsort" element={<HeapSort />} />
        </Routes>
      </div>
    </div>)
}

export default App;
