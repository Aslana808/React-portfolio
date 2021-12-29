import React from "react";
import './App.css';
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Project from "./components/Projects/project";
import Api from "./components/Api/api";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/api">API</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/"> 
            <Home/>
          </Route>
          <Route path="/about"> 
            <About/>
          </Route>
          <Route path="/contact"> 
            <Contact/>
          </Route>
          <Route path="/projects"> 
            <Project/>
          </Route>      
          <Route path="/api"> 
            <Api/>
          </Route>      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
