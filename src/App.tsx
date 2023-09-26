import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;