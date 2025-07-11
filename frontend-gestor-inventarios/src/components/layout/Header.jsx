import React from 'react';

export const Header = () => {

  return (
    <header className="header">

      <div className="logo-container">
        <img
          src="src/img/logonuevo.png"
          alt="Logo Empresa"
          className="logo"
        />
        <span className="name-container">Gestor de Inventarios</span>
      </div>

      <div className="user-info">
        <span>👤 Danilo Casllas </span>
        <span className="role">Role</span>
      </div>
      
    </header>
  );
};
