import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeDetail from './pages/Detail';
import CodeList from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodeList />} />
        <Route path="/code/:code" element={<CodeDetail />} />  
      </Routes>
    </Router>
  );
};

export default App;
