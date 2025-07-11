import React from "react";
import { NavLink } from "react-router-dom";

export const NuevoEvento = () => {
  return (
    <main className="page-content">
      <div className="div-back">
        <NavLink to="/inicio" className="btn-return">
          Regresar
        </NavLink>
      </div>

      <div className="title-container">
        <h2>Nuevo Evento</h2>
      </div>

      <form className="form-agregar">
        <input
          type="date"
          name="fecha"
          placeholder="Fecha "
          required
          className="input-info"
        />
        <input
          type="text"
          name="comercial"
          placeholder="Comercial"
          required
          className="input-info"
        />
        <input
          type="text"
          name="lugar"
          placeholder="Lugar"
          required
          className="input-info"
        />
        <input
          type="text"
          name="planner"
          placeholder="Planer"
          required
          className="input-info"
        />
         <input
          type="text"
          name="cliente"
          placeholder="Clientes"
          required
          className="input-info"
        />
         <input
          type="text"
          name="acompanamiento"
          placeholder="Acompañamiento"
          required
          className="input-info"
        />
         <input
          type="text"
          name="tipo-evento"
          placeholder="Tipo Evento"
          required
          className="input-info"
        />
         <input
          type="time"
          name="inicio-evento"
          placeholder="Inicio Evento"
          required
          className="input-info"
        />
         <input
          type="time"
          name="fin-evento"
          placeholder="Fin Evento"
          required
          className="input-info"
        />
        <button type="submit" className="input-info" id="button-enviar">
          {" "}
          Siguiente
        </button>
      </form>
    </main>
  );
};
