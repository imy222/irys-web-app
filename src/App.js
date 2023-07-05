import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from "./components/NavBar";

function App() {
  return (
      <div>
          <NavBar/>
          <Home/>
          <About/>
      </div>
  );
}

export default App;
