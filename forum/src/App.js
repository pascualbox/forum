import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button'
import Switch from './components/switch/Switch'
import PostHeader from './components/postHeader/PostHeader';
import { useState } from 'react';

function App() {
  const [checked, setchecked] = useState(false);
  function handleChange(checked) {
    setchecked(!checked);
    this.setState({ checked });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Button message="Enviar respuesta" />
          <Switch onChange={handleChange} checked={checked} />
          <PostHeader title="Pepe" category="Masajista de Tello"/>
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
    </div>
  );
}

export default App;
