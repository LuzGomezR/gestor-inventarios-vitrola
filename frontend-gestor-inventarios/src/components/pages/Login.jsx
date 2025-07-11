import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <main className="page-content" id="page-content-login">
      <div className="loginForm">
        <form action="" className="form-login">
          <h1 className="title-login">LOGIN</h1>

          <div className="input-box">
            <input type="text" id="input-name" 
            placeholder="Usuario" 
            required 
            className="input-login"/>
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              id="input-password"
              placeholder="Contraseña"
              required
              className="input-login"
            />
            <FaLock className="icon" />
          </div>

          <div className="forgot-password">
            <NavLink to="#" className="btn-forgot">Olvide mi Contraseña</NavLink>
          </div>

          <button type="submit" className="btn-login">Ingresar</button>
        </form>
      </div>
    </main>
  );
};
