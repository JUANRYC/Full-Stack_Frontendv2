import React, { useState, useEffect } from 'react';
import { createEmpleado, updateEmpleado, getEmpleado } from '../services/empleadoService';
import './Empleados.css';

const EmpleadoForm = ({ id, onSave }) => {
  const initialState = { nombre: '', apellido: '', email: '', puesto: '', salario: '' };
  const [empleado, setEmpleado] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      getEmpleado(id).then(res => setEmpleado(res.data));
    } else {
      setEmpleado(initialState);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({ ...empleado, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
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

  const handleClear = () => {
    setEmpleado(initialState);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="empleado-form">
      <div className="form-group">
        <input
          name="nombre"
          value={empleado.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className={errors.nombre ? 'error' : ''}
        />
        {errors.nombre && <span className="error-message">{errors.nombre}</span>}
      </div>
      <div className="form-group">
        <input
          name="apellido"
          value={empleado.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          className={errors.apellido ? 'error' : ''}
        />
        {errors.apellido && <span className="error-message">{errors.apellido}</span>}
      </div>
      <div className="form-group">
        <input
          name="email"
          value={empleado.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <input
          name="puesto"
          value={empleado.puesto}
          onChange={handleChange}
          placeholder="Puesto"
          className={errors.puesto ? 'error' : ''}
        />
        {errors.puesto && <span className="error-message">{errors.puesto}</span>}
      </div>
      <div className="form-group">
        <input
          name="salario"
          value={empleado.salario}
          onChange={handleChange}
          placeholder="Salario"
          type="number"
          className={errors.salario ? 'error' : ''}
        />
        {errors.salario && <span className="error-message">{errors.salario}</span>}
      </div>
      <div className="form-buttons">
        <button type="submit">{id ? 'Actualizar' : 'Crear'} Empleado</button>
        <button type="button" onClick={handleClear} className="clear-button">Limpiar</button>
      </div>
    </form>
  );
};

export default EmpleadoForm;