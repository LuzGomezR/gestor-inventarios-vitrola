import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Equipos } from "../components/pages/Equipos";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";

export const Rutas = () => {
  return (
    <BrowserRouter>

      {/*LAYOUT*/}
      {/*<Header/>*/}
      {/*<Nav/>*/}


      {/*CONTENIDO CENTRAL Y RUTAS*/}
         <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Login/>} />;
                <Route path="/login" element={<Login/>} />;
                <Route path="/inicio" element={<Home/>}></Route>
                <Route path="/equipos" element={<Equipos/>}></Route>
            </Routes>
         </section>
    
        
        {/*<Footer/>*/}

    </BrowserRouter>
  )
}