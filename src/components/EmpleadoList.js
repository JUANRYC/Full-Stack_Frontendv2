import React, { useState, useEffect } from 'react';
import { getEmpleados } from '../services/empleadoService';
import EmpleadoItem from './EmpleadoItem';
import EmpleadoForm from './EmpleadoForm';
import './Empleados.css';

const EmpleadoList = () => {
  const [empleados, setEmpleados] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const loadEmpleados = async () => {
    const res = await getEmpleados();
    setEmpleados(res.data);
  };

  useEffect(() => {
    loadEmpleados();
  }, []);

  const handleSave = () => {
    loadEmpleados();
    setEditingId(null);
  };

  return (
    <div className="empleados-container">
      <h2>Lista de Empleados</h2>
      <EmpleadoForm id={editingId} onSave={handleSave} />
      {empleados.map(empleado => (
        <EmpleadoItem 
          key={empleado._id} 
          empleado={empleado} 
          onDelete={loadEmpleados}
          onEdit={() => setEditingId(empleado._id)}
        />
      ))}
    </div>
  );
};

export default EmpleadoList;