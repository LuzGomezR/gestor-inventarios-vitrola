import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {Usuarios} from "../components/pages/Usuarios"

export const Rutas = () => {
  return (
    <BrowserRouter>

      
      <Header/>
      
      {/*CONTENIDO CENTRAL Y RUTAS*/}
         <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Login/>} />;
                <Route path="/login" element={<Login/>} />;
                <Route path="/inicio" element={<Home/>}/>;
                <Route path="/usuarios" element={<Usuarios/>}/>;
            </Routes>
         </section>
    
        
        <Footer/>

    </BrowserRouter>
  )
}