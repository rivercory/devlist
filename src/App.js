import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import Home from './pages/Home';
import About from './pages/About';
import List from './pages/List';

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl"><p className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text pretendard">데브리스트</p></Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                <HiBars3 size={32} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ibmplexsans">
              <li><Link to="/">홈</Link></li>
              <li><Link to="/about">소개</Link></li>
              <li><Link to="/list">리스트</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
