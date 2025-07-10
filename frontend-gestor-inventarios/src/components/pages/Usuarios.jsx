import React, { useState } from 'react';
import './Usuarios.css';

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Admin', rol: 'admin', correo: 'admin@correo.com' },
    { id: 2, nombre: 'Auxiliar 1', rol: 'auxiliar', correo: 'aux1@correo.com' },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: '',
    correo: '',
    rol: 'auxiliar',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario({ ...nuevoUsuario, [name]: value });
  };

  const agregarUsuario = (e) => {
    e.preventDefault();
    const nuevo = { ...nuevoUsuario, id: usuarios.length + 1 };
    setUsuarios([...usuarios, nuevo]);
    setNuevoUsuario({ nombre: '', correo: '', rol: 'auxiliar' });
  };

  return (
    <div className="page-layout">
      {/*{isLoggedIn && <Header />}*/}
      <main className="page-content">
      <div className="usuarios-container">
        <h2>Gestión de Usuarios</h2>

        <form onSubmit={agregarUsuario} className="form-usuario">
          <input
            type="text"
            name="nombre"
            value={nuevoUsuario.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            type="email"
            name="correo"
            value={nuevoUsuario.correo}
            onChange={handleChange}
            placeholder="Correo"
            required
          />
          <select
            name="rol"
            value={nuevoUsuario.rol}
            onChange={handleChange}
          >
            <option value="admin">Administrador</option>
            <option value="auxiliar">Auxiliar</option>
          </select>
          <button type="submit">Agregar Usuario</button>
        </form>


  <div className="tabla-wrapper">
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      </main> 
      </div>   
  );
};
