import React from 'react';

export default function ModalNuevoPaciente({ datos, onChange, onClose, onSave }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Registrar nuevo paciente</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={datos.nombre}
            onChange={(e) => onChange('nombre', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            value={datos.fecha_nacimiento}
            onChange={(e) => onChange('fecha_nacimiento', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={datos.telefono}
            onChange={(e) => onChange('telefono', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={datos.correo}
            onChange={(e) => onChange('correo', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Guardar y continuar
          </button>
        </div>
      </div>
    </div>
  );
}
