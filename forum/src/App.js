import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';

function App() {
  const [checked, setchecked] = useState(false);
  function handleChange(checked) {
    setchecked(!checked);
    this.setState({ checked });
  }
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
