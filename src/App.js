import React from "react";
import NavBar from "./components/NavBar";
import { ItemList } from "./components/ItemList/ItemList";
import { ItemDetailContainer } from "./components/ItemList/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaError } from "./components/PaginaError";
import { PaginaContacto } from "./components/PaginaContacto";



export default function App () {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemList/>}/>{/*Ruta que nos envia al home, mediante el brand*/}
          <Route path="/itemDetail/" element={<ItemDetailContainer/>}/>{/*Ruta que nos al detalle del articulo*/}
          <Route path="/productos" element={<ItemList/>}/>{/*Ruta que nos envia al home, mediante el brand*/}
          <Route path="/productos/:categoria" element={<ItemList/>}/>{/*Ruta que nos a ItemList, pero selecciona la categoria*/}
          <Route path="/contacto" element={<PaginaContacto/>}/>{/*Ruta que nos envia la pagina de contacto*/}
          <Route path="/error" element={<PaginaError/>}/>{/*Ruta que nos devuelve pagina de error no encontrado*/}
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
};