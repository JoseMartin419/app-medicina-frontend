// frontend/src/api/pacientes.js
import axios from 'axios';
import { API_URL } from '../config';

const PACIENTES_BASE = `${API_URL}/api/pacientes/`;
const CONSULTAS_BASE = `${API_URL}/api/pacientes/consultas/`;

export const obtenerPacientes = () =>
  axios.get(PACIENTES_BASE).then(res => res.data);

// Añade esta función en src/api/pacientes.js
export const obtenerConsultas = async () => {
  const response = await axios.get(`${API_URL}/api/pacientes/consultas/`);
  return response.data;
}


export const crearPaciente = paciente =>
  axios.post(PACIENTES_BASE, paciente).then(res => res.data);

export const crearConsulta = datos =>
  axios.post(CONSULTAS_BASE, datos).then(res => res.data);

export const obtenerHistorialPorPaciente = pacienteId =>
  axios.get(`${CONSULTAS_BASE}${pacienteId}/`).then(res => res.data);
