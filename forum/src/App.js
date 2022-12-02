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
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/modal" element={<Modal />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
