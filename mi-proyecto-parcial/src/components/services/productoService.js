 import axios from "axios";
const API = "http://localhost:3000/productos";

export const getProductos = () => axios.get(API);
export const createProducto = (data) => axios.post(API, data);
export const updateProducto = (id, data) => axios.put(`${API}/${id}`, data);
export const softDeleteProducto = (id) => axios.delete(`${API}/${id}`);