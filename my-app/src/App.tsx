import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import View from './View/View';
import ViewIteam from './ViewIteam/ViewIteam';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/view" element={<View />} />
          <Route path="/view/:id" element={<ViewIteam/>} />
          <Route path="/create" element={<Form />} />
          <Route path="/update/:id" element={<Form />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
