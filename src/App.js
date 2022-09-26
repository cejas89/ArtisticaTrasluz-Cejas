import React from "react";
import NavBar from "./components/NavBar";
import { ItemDetailContainer } from "./components/ItemList/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaError } from "./components/PaginaError";
import { PaginaContacto } from "./components/PaginaContacto";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { CartContainer } from "./components/CartWidget/CartContainer";
import { CartProvider } from "./context/CartContext";
import ItemCollection from "./components/ItemList/ItemCollection";
import { Home } from "./components/Inicio/Home";



export default function App () {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>{/*Ruta que nos envia al home, mediante el brand*/}
          <Route path="producto/:productoId" element={<ItemDetailContainer/>}/>{/*Ruta que nos al detalle del articulo*/}
          <Route path="/productos" element={<ItemListContainer/>}/>{/*Ruta que nos envia al home, mediante el brand*/}
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>{/*Ruta que nos a ItemList, pero selecciona la categoria*/}
          <Route path="/contacto" element={<PaginaContacto/>}/>{/*Ruta que nos envia la pagina de contacto*/}
          <Route path="/error" element={<PaginaError/>}/>{/*Ruta que nos devuelve pagina de error no encontrado*/}
          <Route path="/carrito" element={<CartContainer/>}/>{/*Ruta que nos devuelve pagina de error no encontrado*/}
          <Route path="/firebase" element={<ItemCollection/>}/>
          <Route path="/hom" element={<Home/>}/>
      </Routes>
      </BrowserRouter>

      <Footer/>
      </CartProvider>
      
      
    </div>
  )
};