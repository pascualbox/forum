import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Modal from './pages/modal/Modal';

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
