import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Admin", rol: "Administadror", correo: "admin@correo.com" },
    { id: 2, nombre: "Auxiliar 1", rol: "Auxiliar", correo: "aux1@correo.com" },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
    rol: "auxiliar",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario({ ...nuevoUsuario, [name]: value });
  };

  const agregarUsuario = (e) => {
    e.preventDefault();
    const nuevo = { ...nuevoUsuario, id: usuarios.length + 1 };
    setUsuarios([...usuarios, nuevo]);
    setNuevoUsuario({ nombre: "", correo: "", rol: "auxiliar" });
  };

  return (
    <main className="page-content">
      <div className="div-back">
        <NavLink to="/inicio" className="btn-return">Regresar</NavLink>
      </div>

      <div className="title-container">
        <h2>Usuarios</h2>
      </div>

      <form onSubmit={agregarUsuario} className="form-usuario">
        <input
          type="number"
          name="identificacion"
          value={nuevoUsuario.identificacion}
          onChange={handleChange}
          placeholder="Identificación "
          required
          className="input-user"
        />
        <input
          type="text"
          name="nombre"
          value={nuevoUsuario.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className="input-user"
        />
        <input
          type="email"
          name="correo"
          value={nuevoUsuario.correo}
          onChange={handleChange}
          placeholder="Correo"
          required
          className="input-user"
        />
        <select name="rol" value={nuevoUsuario.rol} onChange={handleChange} className="input-user">
          <option value="admin">Administrador</option>
          <option value="auxiliar">Auxiliar</option>
        </select>
        <button type="submit" className="input-user" id="button-user"> Agregar Usuario</button>
      </form>

      <div className="tabla-wrapper">
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>#</th>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.identificacion}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
