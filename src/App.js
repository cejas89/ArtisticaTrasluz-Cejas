import React from "react";
import NavBar from "./components/NavBar";
import { ItemDetailContainer } from "./components/ItemList/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaError } from "./components/PaginaError";
import { PaginaContacto } from "./components/PaginaContacto";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { Carrito } from "./components/Carrito";



export default function App () {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>{/*Ruta que nos envia al home, mediante el brand*/}
          <Route path="producto/:productoId" element={<ItemDetailContainer/>}/>{/*Ruta que nos al detalle del articulo*/}
          <Route path="/productos" element={<ItemListContainer/>}/>{/*Ruta que nos envia al home, mediante el brand*/}
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>{/*Ruta que nos a ItemList, pero selecciona la categoria*/}
          <Route path="/contacto" element={<PaginaContacto/>}/>{/*Ruta que nos envia la pagina de contacto*/}
          <Route path="/carrito" element={<Carrito/>}/>{/*Ruta que nos envia la pagina de contacto*/}
          <Route path="/error" element={<PaginaError/>}/>{/*Ruta que nos devuelve pagina de error no encontrado*/}
      </Routes>
      </BrowserRouter>

      <Footer/>
      
      
    </div>
  )
};