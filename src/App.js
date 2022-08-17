import React from "react";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar";


export default function App () {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Este es un texto provisional" another="Otra descrpcion provisional" number= '50' />
      <ItemListContainer greeting="Este es un texto provisional" another="Otra descrpcion provisional" number= '50' />
      <ItemListContainer greeting="Este es un texto provisional" another="Otra descrpcion provisional" number= '50' />
      
    </div>
  )
};