import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button'
import Switch from './components/switch/Switch'
import Post from './components/post/Post';
import { useState } from 'react';

function App() {
  const [checked, setchecked] = useState(false);
  function handleChange(checked) {
    setchecked(!checked);
    this.setState({ checked });
  }
  return (
    <div className="App">
<<<<<<< HEAD
      <Home/>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Button message="Enviar respuesta" />
          <Switch onChange={handleChange} checked={checked} />
          
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
>>>>>>> parent of e2f7a06 (cositas)
    </div>
  );
}

export default App;
