import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([
    {},
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    identificacion: "",
    nombre: "",
    apellido: "",
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
    setNuevoUsuario({ identificacion: "", nombre: "", apellido: "", correo: "", rol: "" });
  };

  return (
    <main className="page-content">
      <div className="div-back">
        <NavLink to="/inicio" className="btn-return">Regresar</NavLink>
      </div>

      <div className="title-container">
        <h2>Usuarios</h2>
      </div>

      <form onSubmit={agregarUsuario} className="form-agregar">
        <input
          type="number"
          name="identificacion"
          value={nuevoUsuario.identificacion}
          onChange={handleChange}
          placeholder="Identificación "
          required
          className="input-info"
        />
        <input
          type="text"
          name="nombre"
          value={nuevoUsuario.nombre}
          onChange={handleChange}
          placeholder="Nombres"
          required
          className="input-info"
        />
        <input
          type="text"
          name="apellido"
          value={nuevoUsuario.apellido}
          onChange={handleChange}
          placeholder="Apellidos"
          required
          className="input-info"
        />
        <input
          type="email"
          name="correo"
          value={nuevoUsuario.correo}
          onChange={handleChange}
          placeholder="Correo"
          required
          className="input-info"
        />
        <select name="rol" value={nuevoUsuario.rol} onChange={handleChange} className="input-info">
          <option value="administrador">Administrador</option>
          <option value="auxiliar">Auxiliar</option>
        </select>
        <button type="submit" className="input-info" id="button-enviar"> Agregar Usuario</button>
      </form>

      <div className="tabla-wrapper">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>N°</th>
              <th>Identificación</th>
              <th>Nombres</th>
              <th>Apellidos</th>
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
                <td>{usuario.apellido}</td>
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
