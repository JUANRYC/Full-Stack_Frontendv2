import React from 'react';
import EmpleadoList from './components/EmpleadoList';
import './components/Empleados.css';

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: '#007bff', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Gestion Empleados</h1>
      </header>
      <main>
        <EmpleadoList />
      </main>
    </div>
  );
}

export default App;