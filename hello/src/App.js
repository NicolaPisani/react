import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import GithubUser from "./Esercizio-44/GithubUser";
import NotFound from "./NotFound";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users/NicolaPisani">Username</Link>
            </li>
            <li>
              <Link to="/notFound">Link</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/:username" element={<GithubUser />} />
          <Route element={<NotFound />}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
