import React from 'react';
import './Header.css';

export const Header = () => {

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="src/img/logonuevo.png" // Asegúrate de tener el logo en `public/logo.png` o cambia la ruta
          alt="Logo Empresa"
          className="logo"
        />
        <span className="app-name">Gestor de Inventarios</span>
      </div>

      <div className="user-info">
        <span>👤 Danilo Casllas </span>
        <span className="role">Role</span>
      </div>
    </header>
  );
};
