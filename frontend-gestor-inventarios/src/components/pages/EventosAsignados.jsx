import React from "react";
import { NavLink } from "react-router-dom";

export const EventosAsignados = () => {
  return (
    <main className="page-content">
      <div className="div-back">
        <NavLink to="/inicio" className="btn-return">
          Regresar
        </NavLink>
      </div>

      <div className="title-container">
        <h2>Eventos Asigandos</h2>
      </div>
    </main>
  );
};
