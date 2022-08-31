import React from "react";

import NavBar from "./components/NavBar";

import { ItemList } from "./components/ItemList/ItemList";
import { ItemDetailContainer } from "./components/ItemList/ItemDetailContainer";
import { Prueba } from "./components/Prueba";


export default function App () {
  return (
    <div>
      <NavBar/>
      <ItemList/>
      <ItemDetailContainer/>
    </div>
  )
};