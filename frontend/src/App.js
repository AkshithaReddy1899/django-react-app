import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import List from './components/List';

function App() {
  return (
    <div className="text-center bg-slate-800 w-screen h-screen text-slate-200 overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
