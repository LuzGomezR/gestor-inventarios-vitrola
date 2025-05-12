import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Equipos } from "../components/pages/Equipos";

export const Rutas = () => {
  return (
    <BrowserRouter>
    
         <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Login/>} />;
                <Route path="/inicio" element={<Home/>}></Route>
                <Route path="/Equipos" element={<Equipos/>}></Route>
            </Routes>
         </section>

    </BrowserRouter>
  )
}