import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './templates/Layout';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import AreaListPage from './pages/AreaListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="areas" element={<AreaListPage />} />
          <Route path="cadastrar" element={<CadastroPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;