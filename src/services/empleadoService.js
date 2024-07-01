import axios from 'axios';

const API_URL = '"https://full-stack-backend-liart.vercel.app/api/empleados"';

export const getEmpleados = () => axios.get(API_URL);
export const getEmpleado = (id) => axios.get(`${API_URL}/${id}`);
export const createEmpleado = (empleado) => axios.post(API_URL, empleado);
export const updateEmpleado = (id, empleado) => axios.put(`${API_URL}/${id}`, empleado);
export const deleteEmpleado = (id) => axios.delete(`${API_URL}/${id}`);