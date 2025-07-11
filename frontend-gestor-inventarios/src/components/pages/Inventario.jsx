import React from "react";
import { NavLink } from "react-router-dom";

export const Inventario = () => {

  return (

    <main className="page-content">
      <div className="div-back">
        <NavLink to="/inicio" className="btn-return">
          Regresar
        </NavLink>
      </div>

      <div className="title-container">
        <h2>Inventario</h2>
      </div>

      <form className="form-agregar">
        <input
          type="number"
          name="serial"
          placeholder="Serial "
          required
          className="input-info"
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          required
          className="input-info"
        />
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          required
          className="input-info"
        />
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          required
          className="input-info"
        />
        <select name="tipo" className="input-info">
          <option value="sonido">Sonido</option>
          <option value="iluminacion">Iluminación</option>
          <option value="video">Video</option>
          <option value="estructuras">Estructuras</option>
          <option value="instrumentos">Instrumentos</option>
          <option value="escenografia">Escenografía</option>
          <option value="vestuario">Vestuario</option>
          <option value="exterior">Protocolo Exterior</option>
          <option value="herramienta">Herramienta</option>
        </select>
        <button type="submit" className="input-info" id="button-enviar"> Agregar al Inventario</button>
      </form>

      <div className="tabla-wrapper">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>N°</th>
              <th>Serial</th>
              <th>Descripción</th>  
              <th>Marca</th>
              <th>Cantidad</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </main>
  );
};
