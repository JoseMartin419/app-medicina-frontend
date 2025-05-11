
import { Link, useNavigate } from 'react-router-dom';
import { obtenerPacientes, obtenerHistorialPorPaciente, crearPaciente } from '../api/pacientes';
import ModalNuevoPaciente from '../components/ModalNuevoPaciente';
import { Menu, X, Activity, FolderOpenDot, FilePlus, Home, User, Calendar, Phone, Mail, Plus, AlertTriangle, Stethoscope, Clipboard, Pill } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
const API_URL = process.env.REACT_APP_API_URL;  // ← Aquí


export default function Inicio() {
  
  const [open, setOpen] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoPaciente, setNuevoPaciente] = useState({ nombre: '', fecha_nacimiento: '', telefono: '', correo: '' });
  const [busqueda, setBusqueda] = useState('');
  const [pacientes, setPacientes] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();
  const [totalPacientes, setTotalPacientes] = useState(0);
  const [consultasHoy, setConsultasHoy] = useState(0);
  const [recetasGeneradas, setRecetasGeneradas] = useState(0);
  const [alertasActivas, setAlertasActivas] = useState(3);

  useEffect(() => {
    const cargarDatos = async () => {
      setCargando(true);
      try {
        const [dataPacientes, dataConsultas] = await Promise.all([
          obtenerPacientes(),
          fetch(`${API_URL}/api/pacientes/consultas/`).then(res => res.json())
        ]);
        
        setPacientes(dataPacientes);
        setTotalPacientes(dataPacientes.length);
        
        const hoy = new Date().toISOString().split("T")[0];
        const consultasDelDia = dataConsultas.filter(c => c.fecha.startsWith(hoy));
        setAlertasActivas(
          consultasDelDia.filter(c => c.diagnostico?.toLowerCase().includes("urgente")).length
        );
        
        
        setConsultasHoy(consultasDelDia.length);
        setRecetasGeneradas(dataConsultas.length);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setCargando(false);
      }
    };
    
    cargarDatos();
  }, []);

  const handleBusqueda = () => {
    const pacienteEncontrado = pacientes.find(p => 
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    
    if (pacienteEncontrado) {
      navigate(`/consultas?nuevo=1&paciente=${pacienteEncontrado.id}`);
    } else {
      setNuevoPaciente({ 
        nombre: busqueda, 
        fecha_nacimiento: '', 
        telefono: '', 
        correo: '' 
      });
      setMostrarModal(true);
    }
  };

  const cargarHistorial = async (id) => {
    try {
      const data = await obtenerHistorialPorPaciente(id);
      setHistorial(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error al cargar historial:", error);
      setHistorial([]);
    }
  };

  const resultados = pacientes.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      {/* Barra de navegación moderna */}
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
              <div className="ml-10 flex items-baseline space-x-6">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Home size={18} /> Inicio
                </Link>
                <Link to="/consultas" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Stethoscope size={18} /> Consultas
                </Link>
                <Link to="/historial" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Clipboard size={18} /> Historial
                </Link>
                <Link to="/medicamentos" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Pill size={18} /> Medicamentos
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Home size={18} /> Inicio
                </Link>
                <Link to="/consultas" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Stethoscope size={18} /> Consultas
                </Link>
                <Link to="/historial" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Clipboard size={18} /> Historial
                </Link>
                <Link to="/medicamentos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                  <Pill size={18} /> Medicamentos
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Contenido principal */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* EDITANDO 9 MAYO */}
        {alertasActivas >= 5 && (
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md mb-6 shadow">
            ⚠️ Hay {alertasActivas} alertas médicas activas que requieren atención.
          </div>
        )}



        {/* Hero section */}
        <section className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Gestión Médica <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Inteligente</span>
          </motion.h1>
          {/* EDITANDO 9 MAYO */}
          {cargando && (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          )}

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Optimiza tu consulta con nuestro sistema integral de gestión de pacientes, historiales médicos y seguimiento de tratamientos.
          </motion.p>

          {/* Buscador mejorado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative shadow-lg rounded-xl overflow-hidden">
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar paciente por nombre..."
                autoComplete="off"
                className="w-full py-4 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl"
              />
              <button
                onClick={handleBusqueda}
                className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 rounded-lg flex items-center justify-center hover:shadow-md transition-all"
              >
                <span className="hidden sm:inline">Buscar</span>
                <Plus className="ml-2" size={18} />
              </button>
            </div>
            
            {busqueda && resultados.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
              >
                {resultados.map(p => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSeleccionado(p);
                      cargarHistorial(p.id);
                      setBusqueda('');
                    }}
                    className="px-4 py-3 cursor-pointer hover:bg-indigo-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <User className="text-indigo-600" size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{p.nombre}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <Calendar size={12} /> {p.fecha_nacimiento}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Dashboard de métricas */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Pacientes</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{totalPacientes}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-full">
                <User className="text-indigo-600" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500" style={{ width: `${Math.min(100, totalPacientes)}%` }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Consultas hoy</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{consultasHoy}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Stethoscope className="text-blue-600" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${Math.min(100, consultasHoy * 10)}%` }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Recetas</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{recetasGeneradas}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Pill className="text-green-600" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${Math.min(100, recetasGeneradas / 10)}%` }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Alertas</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{alertasActivas}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-full">
                <AlertTriangle className="text-amber-600" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500" style={{ width: `${Math.min(100, alertasActivas * 33)}%` }}></div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Explora Carpetas</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">12</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FolderOpenDot className="text-purple-600" size={20} />
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Consultas cargadas</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{consultasHoy}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-full">
                <FilePlus className="text-indigo-600" size={20} />
              </div>
            </div>
          </motion.div>


        </motion.section>

        {/* Detalles del paciente seleccionado */}
        {seleccionado && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <User className="text-indigo-600" size={20} />
                    </div>
                    {seleccionado.nombre}
                  </h2>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="text-gray-400" size={16} />
                      <span>Nacimiento: <span className="font-medium">{seleccionado.fecha_nacimiento}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="text-gray-400" size={16} />
                      <span>Teléfono: <span className="font-medium">{seleccionado.telefono || 'No registrado'}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="text-gray-400" size={16} />
                      <span>Correo: <span className="font-medium">{seleccionado.correo || 'No registrado'}</span></span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/consultas?nuevo=1&paciente=${seleccionado.id}`)}
                  className="mt-4 sm:mt-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Stethoscope size={18} />
                  <span>Nueva Consulta</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clipboard className="text-indigo-500" size={18} />
                Historial Reciente
              </h3>
              
              {Array.isArray(historial) && historial.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-gray-500">No hay consultas registradas para este paciente.</p>
                  <button
                    onClick={() => navigate(`/consultas?nuevo=1&paciente=${seleccionado.id}`)}
                    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                  >
                    Registrar primera consulta
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {Array.isArray(historial) && historial.slice(0, 3).map((h, index) => (
                    <div key={h.id || index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {new Date(h.fecha).toLocaleDateString('es-ES', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Motivo:</span> {h.motivo}</p>
                        </div>
                        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                          Consulta
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm"><span className="font-medium">Diagnóstico:</span> {h.diagnostico}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Acciones rápidas */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button 
              onClick={() => navigate('/consultas?nuevo=1')}
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <Stethoscope className="text-indigo-600" size={20} />
              </div>
              <span className="font-medium text-gray-900">Nueva Consulta</span>
              <span className="text-sm text-gray-500 mt-1">Registrar una nueva consulta médica</span>
            </button>
            
            <button 
              onClick={() => setMostrarModal(true)}
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <User className="text-indigo-600" size={20} />
              </div>
              <span className="font-medium text-gray-900">Nuevo Paciente</span>
              <span className="text-sm text-gray-500 mt-1">Agregar un nuevo paciente al sistema</span>
            </button>
            
            <button 
              onClick={() => navigate('/historial')}
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <Clipboard className="text-indigo-600" size={20} />
              </div>
              <span className="font-medium text-gray-900">Ver Historiales</span>
              <span className="text-sm text-gray-500 mt-1">Consultar historiales médicos completos</span>
            </button>
            
            <button 
              onClick={() => navigate('/medicamentos')}
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <Pill className="text-indigo-600" size={20} />
              </div>
              <span className="font-medium text-gray-900">Medicamentos</span>
              <span className="text-sm text-gray-500 mt-1">Gestionar inventario de medicamentos</span>
            </button>
          </div>
        </motion.section>
      </main>

      {/* Modal de nuevo paciente */}
      {mostrarModal && (
        <ModalNuevoPaciente
          datos={nuevoPaciente}
          onChange={(campo, valor) => setNuevoPaciente(prev => ({ ...prev, [campo]: valor }))}
          onClose={() => setMostrarModal(false)}
          onSave={async () => {
            try {
              const pacienteCreado = await crearPaciente(nuevoPaciente);
              if (pacienteCreado && pacienteCreado.id) {
                setMostrarModal(false);
                navigate(`/consultas?nuevo=1&paciente=${pacienteCreado.id}`);
              }
            } catch (error) {
              alert("Error al guardar el paciente.");
              console.error(error);
            }
          }}
        />
      )}
    </div>
  );
}