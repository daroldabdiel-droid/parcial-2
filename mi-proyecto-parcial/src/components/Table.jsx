const fieldMap = {
  productos:   ['id', 'nombre', 'precio'],
  proveedores: ['id', 'nombre', 'contacto'],
  marcas:      ['id', 'nombre', 'origen'],
};

export default function Table({ data, view, columns, onDelete, onEdit }) {
  const fields = fieldMap[view];

  if (!data || data.length === 0) {
    return (
      <div className="border border-zinc-700 rounded-xl bg-zinc-900 p-12 text-center text-zinc-500 text-sm">
        Sin registros
      </div>
    );
  }

  return (
    <div className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-900">
      <table className="w-full text-sm">
        <thead className="bg-zinc-950 border-b border-zinc-700">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-5 py-3 text-left text-xs uppercase tracking-widest text-zinc-500 font-medium"
              >
                {col}
              </th>
            ))}
            <th className="px-5 py-3 text-right text-xs uppercase tracking-widest text-zinc-500 font-medium">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={item.id}
              className={`border-b border-zinc-800 hover:bg-zinc-800 transition-colors ${
                idx === data.length - 1 ? 'border-b-0' : ''
              }`}
            >
              {fields.map((field, i) => (
                <td key={field} className="px-5 py-3 text-zinc-100">
                  {i === 0 ? (
                    <span className="text-zinc-500 text-xs font-mono">
                      #{String(item[field]).padStart(3, '0')}
                    </span>
                  ) : (
                    item[field]
                  )}
                </td>
              ))}
              <td className="px-5 py-3">
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-xs font-mono px-3 py-1.5 rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
                  >
                    ✏ Editar
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-xs font-mono px-3 py-1.5 rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                  >
                    ✕ Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}