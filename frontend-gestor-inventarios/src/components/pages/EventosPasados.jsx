import React from "react";
import { NavLink } from "react-router-dom";

export const EventosPasados = () => {
  return (
    <main className="page-content">
      <div className="div-back">
        <NavLink to="/inicio" className="btn-return">
          Regresar
        </NavLink>
      </div>

      <div className="title-container">
        <h2>Eventos Pasados</h2>
      </div>

            <div className="tabla-wrapper">
        <table className="tabla-datos">
          <thead>
            <tr>
              <th>N°</th>
              <th>Fecha</th>
              <th>Tipo de Evento</th>  
              <th>Lugar</th>
              <th>Planner</th>
              <th>Cliente</th>
              <th>Ficha</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </main>
  );
};
