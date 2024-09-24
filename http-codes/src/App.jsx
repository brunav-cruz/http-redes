import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeList from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodeList />} />
      </Routes>
    </Router>
  );
};

export default App;
