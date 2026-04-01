import { useState } from 'react';

const fieldMap = {
  productos:   ['nombre', 'precio'],
  proveedores: ['nombre', 'contacto'],
  marcas:      ['nombre', 'origen'],
};

const labelMap = {
  nombre:   'Nombre',
  precio:   'Precio',
  contacto: 'Contacto',
  origen:   'Origen',
};

export default function EditarModal({ item, view, onClose, onSave }) {
  const [form, setForm] = useState({ ...item });
  const fields = fieldMap[view];

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 w-[420px] max-w-[95vw] shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
          <h2 className="font-bold text-lg text-white tracking-tight">
            Editar registro{' '}
            <span className="text-zinc-500 text-sm font-mono">
              #{String(item.id).padStart(3, '0')}
            </span>
          </h2>
        </div>

        {/* Fields */}
        {fields.map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-1.5">
              {labelMap[field]}
            </label>
            <input
              type="text"
              value={form[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white font-mono outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        ))}

        {/* Actions */}
        <div className="flex gap-3 justify-end mt-7">
          <button
            onClick={onClose}
            className="text-sm font-mono px-5 py-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={() => onSave(form)}
            className="text-sm font-mono px-5 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition-all"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}