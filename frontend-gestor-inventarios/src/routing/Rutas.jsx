import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {Usuarios} from "../components/pages/Usuarios"
import {Inventario} from "../components/pages/Inventario"
import {EventosPasados} from "../components/pages/EventosPasados"
import {NuevoEvento} from "../components/pages/NuevoEvento"
import {EventosAsignados} from "../components/pages/EventosAsignados"

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
                <Route path="/inventario" element={<Inventario/>}/>;
                <Route path="/eventos-pasados" element={<EventosPasados/>}/>;
                <Route path="/nuevo-evento" element={<NuevoEvento/>}/>;
                <Route path="/eventos-asignados" element={<EventosAsignados/>}/>;
            </Routes>
         </section>
    
        
        <Footer/>

    </BrowserRouter>
  )
}