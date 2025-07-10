import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} La Vitrola Música Creativa</p>
    </footer>
  );
};
