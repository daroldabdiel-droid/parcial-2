import { useState } from 'react';
import useCrud from './hooks/useCrud';
import Table from './components/Table';
import EditarModal from './components/EditarModal';

const columnsMap = {
  productos:   ['ID', 'Nombre', 'Precio'],
  proveedores: ['ID', 'Nombre', 'Contacto'],
  marcas:      ['ID', 'Nombre', 'Origen'],
};

export default function App() {
  const [view, setView] = useState('productos');
  const { items, remove, update } = useCrud(view);
  const [editingItem, setEditingItem] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleDelete = (id) => {
    remove(id);
    showToast('Registro eliminado');
  };

  const handleSave = (updatedItem) => {
    update(updatedItem);
    setEditingItem(null);
    showToast('Registro actualizado correctamente');
  };

  const views = ['productos', 'proveedores', 'marcas'];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-9 border-b border-zinc-800 pb-5">
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'sans-serif' }}>
          Sistema <span className="text-yellow-400">crud</span>
        </h1>

        {/* Nav */}
        <nav className="flex gap-1.5 bg-zinc-900 border border-zinc-700 p-1 rounded-xl">
          {views.map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`text-xs uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                view === v
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {v}
            </button>
          ))}
        </nav>
      </div>

      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold capitalize tracking-tight">
          Gestión de {view}
        </h2>
        <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 uppercase tracking-widest">
          {items.length} registros
        </span>
      </div>

      {/* Table */}
      <Table
        data={items}
        view={view}
        columns={columnsMap[view]}
        onDelete={handleDelete}
        onEdit={(item) => setEditingItem(item)}
      />

      {/* Modal */}
      {editingItem && (
        <EditarModal
          item={editingItem}
          view={view}
          onClose={() => setEditingItem(null)}
          onSave={handleSave}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-green-400 text-black text-sm font-mono font-medium px-5 py-3 rounded-xl shadow-xl z-50 animate-bounce">
          {toast}
        </div>
      )}
    </div>
  );
}