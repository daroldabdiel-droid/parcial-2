import { useState } from 'react';

const initialData = {
  productos: [
    { id: 1, nombre: 'Laptop Pro 15"', precio: '$1,299.00' },
    { id: 2, nombre: 'Monitor UltraWide 34"', precio: '$549.00' },
    { id: 3, nombre: 'Teclado Mecánico RGB', precio: '$89.00' },
    { id: 4, nombre: 'Mouse Inalámbrico', precio: '$45.00' },
    { id: 5, nombre: 'Auriculares Noise Cancel', precio: '$199.00' },
    { id: 6, nombre: 'Webcam 4K', precio: '$129.00' },
  ],
  proveedores: [
    { id: 1, nombre: 'TechDistrib S.A.', contacto: 'techd@email.com' },
    { id: 2, nombre: 'Global Imports Ltda.', contacto: '+503 2200-1100' },
    { id: 3, nombre: 'ElectroSupply Corp.', contacto: 'ventas@electro.com' },
    { id: 4, nombre: 'InnoTrade Group', contacto: '+503 7890-5432' },
    { id: 5, nombre: 'Pacific Tech SV', contacto: 'pacific@sv.com' },
  ],
  marcas: [
    { id: 1, nombre: 'Samsung', origen: 'Corea del Sur' },
    { id: 2, nombre: 'Dell', origen: 'Estados Unidos' },
    { id: 3, nombre: 'LG Electronics', origen: 'Corea del Sur' },
    { id: 4, nombre: 'Logitech', origen: 'Suiza' },
    { id: 5, nombre: 'Sony', origen: 'Japón' },
    { id: 6, nombre: 'Apple', origen: 'Estados Unidos' },
  ],
};

export default function useCrud(view) {
  const [data, setData] = useState(initialData);

  const items = data[view] || [];

  const remove = (id) => {
    setData((prev) => ({
      ...prev,
      [view]: prev[view].filter((item) => item.id !== id),
    }));
  };

  const update = (updatedItem) => {
    setData((prev) => ({
      ...prev,
      [view]: prev[view].map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    }));
  };

  return { items, remove, update };
}