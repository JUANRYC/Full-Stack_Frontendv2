import React, { useState, useEffect } from 'react';
import { createEmpleado, updateEmpleado, getEmpleado } from '../services/empleadoService';
import './Empleados.css';

const EmpleadoForm = ({ id, onSave }) => {

  const [empleado, setEmpleado] = useState({ nombre: '', apellido: '', email: '', puesto: '', salario: '' });

  useEffect(() => {
    if (id) {
      getEmpleado(id).then(res => setEmpleado(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateEmpleado(id, empleado);
    } else {
      await createEmpleado(empleado);
    }
    onSave();
  };

return (
    <form onSubmit={handleSubmit} className="empleado-form">
      <input name="nombre" value={empleado.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="apellido" value={empleado.apellido} onChange={handleChange} placeholder="Apellido" required />
      <input name="email" value={empleado.email} onChange={handleChange} placeholder="Email" required type="email" />
      <input name="puesto" value={empleado.puesto} onChange={handleChange} placeholder="Puesto" required />
      <input name="salario" value={empleado.salario} onChange={handleChange} placeholder="Salario" required type="number" />
      <button type="submit">{id ? 'Actualizar' : 'Crear'} Empleado</button>
    </form>
  );
};

export default EmpleadoForm;