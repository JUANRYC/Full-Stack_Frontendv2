import React from 'react';
import { deleteEmpleado } from '../services/empleadoService';
import './Empleados.css';

const EmpleadoItem = ({ empleado, onDelete, onEdit }) => {
  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
      await deleteEmpleado(empleado._id);
      onDelete();
    }
  };

  return (
    <div className="empleado-item">
      <h3>{empleado.nombre} {empleado.apellido}</h3>
      <p>Email: {empleado.email}</p>
      <p>Puesto: {empleado.puesto}</p>
      <p>Salario: ${empleado.salario}</p>
      <button onClick={() => onEdit(empleado._id)}>Editar</button>
      <button onClick={handleDelete} className="delete">Eliminar</button>
    </div>
  );
};

export default EmpleadoItem;