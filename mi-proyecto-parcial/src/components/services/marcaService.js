 import axios from "axios";
const API = "http://localhost:3000/marcas";

export const getMarcas = () => axios.get(API);
export const createMarca = (data) => axios.post(API, data);
export const updateMarca = (id, data) => axios.put(`${API}/${id}`, data);
export const softDeleteMarca = (id) => axios.delete(`${API}/${id}`);