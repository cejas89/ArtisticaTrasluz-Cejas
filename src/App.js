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
          <Route path="/" element={<ItemList/>}/>
          <Route path="/itemDetail" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemList/>}/>
          <Route path="/error" element={<PaginaError/>}/>
          <Route path="/contacto" element={<PaginaContacto/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
};