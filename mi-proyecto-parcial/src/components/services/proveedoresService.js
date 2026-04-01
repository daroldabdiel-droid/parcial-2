 import axios from "axios";
const API = "http://localhost:3000/proveedores";

export const getProveedores = () => axios.get(API);
export const createProveedor = (data) => axios.post(API, data);
export const updateProveedor = (id, data) => axios.put(`${API}/${id}`, data);
export const softDeleteProveedor = (id) => axios.delete(`${API}/${id}`);