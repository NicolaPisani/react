import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";

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
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/*" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
