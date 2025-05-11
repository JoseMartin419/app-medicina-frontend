import { Menu, X, Activity, FolderOpenDot, FilePlus, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="text-blue-600" size={28} />
          <span className="text-2xl font-semibold text-gray-800">SOFTWARE MÉDICO</span>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className={`md:flex gap-8 text-gray-800 font-medium transition-transform duration-300 ease-in-out absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 ${open ? 'top-14' : '-top-80'} md:top-0 px-4 py-2 md:p-0 shadow-md md:shadow-none`}>
          <li><Link to="/" className="flex items-center gap-1 hover:text-blue-500"><Home size={20}/>Inicio</Link></li>
          <li><Link to="/consultas" className="flex items-center gap-1 hover:text-blue-500"><FilePlus size={20}/>Consultas</Link></li>
          <li><Link to="/historial" className="flex items-center gap-1 hover:text-blue-500"><FolderOpenDot size={20}/>Historial</Link></li>          <li><Link to="/medicamentos" className="flex items-center gap-1 hover:text-purple-600"><FolderOpenDot size={20}/>Medicamentos</Link></li>

        </ul>
      </div>
    </nav>
  );
}
