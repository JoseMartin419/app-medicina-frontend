import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Activity,
  Home,
  FilePlus,
  FolderOpenDot,
  Menu,
  X,
  User,
  Calendar,
  FileText,
  Stethoscope,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  AlertCircle,
  Plus,
  ArrowLeft,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Historial() {
  const [consultas, setConsultas] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    patientId: '',
    patientName: '',
    hasPrescription: false
  });
  const [expandedConsulta, setExpandedConsulta] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Obtener consultas y pacientes en paralelo
        const [consultasRes, pacientesRes] = await Promise.all([
          fetch('http://localhost:8000/api/consultas/'),
          fetch('http://localhost:8000/api/pacientes/')
        ]);
        
        const consultasData = await consultasRes.json();
        const pacientesData = await pacientesRes.json();
        
        setConsultas(consultasData);
        setPacientes(pacientesData);
      } catch (err) {
        console.error("Error al obtener datos:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Función para obtener el nombre del paciente por su ID
  const getNombrePaciente = (pacienteId) => {
    const paciente = pacientes.find(p => p.id === pacienteId);
    return paciente ? paciente.nombre : 'Paciente no encontrado';
  };

  const filteredConsultas = consultas.filter(consulta => {
    const nombrePaciente = getNombrePaciente(consulta.paciente).toLowerCase();
    
    // Filtro por búsqueda
    const matchesSearch = 
      consulta.motivo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consulta.diagnostico.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consulta.paciente.toString().includes(searchTerm) ||
      nombrePaciente.includes(searchTerm.toLowerCase());

    // Filtros avanzados
    const matchesFilters = 
      (!filters.dateFrom || new Date(consulta.fecha) >= new Date(filters.dateFrom)) &&
      (!filters.dateTo || new Date(consulta.fecha) <= new Date(filters.dateTo)) &&
      (!filters.patientId || consulta.paciente.toString() === filters.patientId) &&
      (!filters.patientName || nombrePaciente.includes(filters.patientName.toLowerCase())) &&
      (!filters.hasPrescription || consulta.url_receta);

    return matchesSearch && matchesFilters;
  });

  // ... (resto de funciones como toggleExpandConsulta, formatDate, downloadReceta se mantienen igual)
  const toggleExpandConsulta = (id) => {
    setExpandedConsulta(prev => (prev === id ? null : id));
  };

  const formatDate = (fecha) => {
    try {
      const date = new Date(fecha);
      if (isNaN(date.getTime())) return 'Fecha no válida';
      
      return date.toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Fecha no válida';
    }
  };
  
  const downloadReceta = (url) => {
    if (url) {
      window.open(`http://localhost:8000${url}`, '_blank');
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      {/* NAVBAR */}
        <nav className="bg-white shadow-sm fixed w-full z-10 backdrop-blur-sm bg-opacity-90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Activity className="text-indigo-600" size={28} />
                  <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">MediTrack Pro</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                    <Home size={18} /> Inicio
                  </Link>
                  <Link to="/consultas" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                    <FilePlus size={18} /> Consultas
                  </Link>
                  <Link to="/historial" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2 bg-indigo-50 text-indigo-700">
                    <FolderOpenDot size={18} /> Historial
                  </Link>
                </div>
              </div>
              
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
                >
                  {open ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Menú móvil */}
          <AnimatePresence>
            {open && (
              <motion.div 
              key="mobile-menu"                 //  ← clave única
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                  <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                    <Home size={18} /> Inicio
                  </Link>
                  <Link to="/consultas" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                    <FilePlus size={18} /> Consultas
                  </Link>
                  <Link to="/historial" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2 bg-indigo-50 text-indigo-700">
                    <FolderOpenDot size={18} /> Historial
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Encabezado (se mantiene igual) */}

        {/* Barra de búsqueda y filtros */}
        {/*EDITANDO 9 MAYO */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Historial de Consultas</h2>
          <Link
            to="/consultas?nuevo=1"
            className="flex items-center bg-indigo-600 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition-all"
          >
            <Plus size={16} className="mr-2" />
            Nueva Consulta
          </Link>
        </div>
        <div className="mb-8">
          <div className="relative rounded-md shadow-sm mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 py-3 border-gray-300 rounded-md"
              placeholder="Buscar por motivo, diagnóstico, nombre o ID de paciente"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="h-full px-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                <Filter className="h-5 w-5" />
                <span className="ml-1 text-sm">Filtros</span>
                {filtersOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Filtros avanzados */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-4 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Desde</label>
                    <input
                      type="date"
                      value={filters.dateFrom}
                      onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hasta</label>
                    <input
                      type="date"
                      value={filters.dateTo}
                      onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID Paciente</label>
                    <input
                      type="text"
                      value={filters.patientId}
                      onChange={(e) => setFilters({...filters, patientId: e.target.value})}
                      placeholder="Ej: 123"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Paciente</label>
                    <input
                      type="text"
                      value={filters.patientName}
                      onChange={(e) => setFilters({...filters, patientName: e.target.value})}
                      placeholder="Ej: Juan Pérez"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex items-end">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.hasPrescription}
                        onChange={(e) => setFilters({...filters, hasPrescription: e.target.checked})}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Solo con receta</span>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Resultados */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : filteredConsultas.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron consultas</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || Object.values(filters).some(Boolean) 
                ? "Intenta ajustar tus criterios de búsqueda" 
                : "No hay consultas registradas en el sistema"}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredConsultas.map((consulta) => (
              <motion.div
                key={consulta.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:border-indigo-300 transition-colors"
              >
                <button
                  onClick={() => toggleExpandConsulta(consulta.id)}
                  className="w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <ClipboardList className="text-indigo-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Consulta #{consulta.id}
                        </h3>
                        <p className="mt-1 text-sm text-gray-900">
                          <span className="font-semibold">Paciente:</span> {getNombrePaciente(consulta.paciente)} (ID: {consulta.paciente})
                        </p>
                        <p className="mt-1 text-sm text-gray-500 flex items-center gap-2">
                          <Calendar size={14} />
                          {formatDate(consulta.fecha)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {consulta.url_receta && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Receta disponible
                        </span>
                      )}
                      {expandedConsulta === consulta.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Detalles expandidos (se mantienen igual) */}
                <AnimatePresence>
                {expandedConsulta === consulta.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 px-6 py-4">
                      {/*EDITANDO 9 MAYO*/}
                      <div className="flex gap-4 mb-4 text-gray-500">
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          <span>{getNombrePaciente(consulta.paciente)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Stethoscope size={16} />
                          <span>Consulta médica</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText size={16} />
                          <span>Detalles del expediente</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Motivo de consulta</h4>
                          <p className="text-sm text-gray-900">{consulta.motivo}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Diagnóstico</h4>
                          <p className="text-sm text-gray-900">{consulta.diagnostico}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Antecedentes</h4>
                          <p className="text-sm text-gray-900">
                            {consulta.antecedentes || 'No registrado'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Tratamiento</h4>
                          {consulta.tratamiento && consulta.tratamiento.length > 0 ? (
                            <ul className="list-disc list-inside text-sm text-gray-900 space-y-1">
                              {consulta.tratamiento.map((med, index) => (
                                <li key={index}>
                                  <strong>{med.nombre}</strong>: {med.posologia}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-900">No se registró tratamiento</p>
                          )}
                        </div>
                      </div>

                      {consulta.url_receta && (
                        <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                          <button
                            type="button"
                            onClick={() => downloadReceta(consulta.url_receta)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Download className="-ml-1 mr-2 h-5 w-5" />
                            Descargar Receta
                          </button>
                          {/*EDITADO 9 MAYO */}
                          <button
                            type="button"
                            onClick={() => navigate(`/pacientes/${consulta.paciente}`)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <User size={16} className="mr-2" />
                            Ver paciente
                          </button>

                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      {/*EDITANDO 9 MAYO */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm"
        >
          <ArrowLeft size={16} className="mr-1" />
          Volver arriba
        </button>
      </div>

    </div>
  );
}
