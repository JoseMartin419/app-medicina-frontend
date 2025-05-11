import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Medicamentos from './pages/Medicamentos';


import Consultas from './pages/Consultas';

//import HistorialTodos from './pages/HistorialTodos';
import HistorialPaciente from './pages/Historial';
import Historial from './pages/Historial';






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/historial/:pacienteId" element={<HistorialPaciente />} />
        <Route path="/medicamentos" element={<Medicamentos />} />

      </Routes>
    </BrowserRouter>
  );
}
