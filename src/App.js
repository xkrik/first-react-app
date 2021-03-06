import React from 'react'
import logo from './logo.svg'
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import UserBoard from './components/UserBoard'
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <Title content="Simple title" />
        <LightSwitch />
        <UserBoard />
        <Clock />
      </main>
    </div>
  );
}

export default App;
