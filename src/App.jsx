import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Paginas/Layout';
import Inicio from './Paginas/Inicio';
import NuevoUsuario from './Paginas/NuevoUsuario';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>} />
          <Route path="nuevoUsuario" element={<NuevoUsuario/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
