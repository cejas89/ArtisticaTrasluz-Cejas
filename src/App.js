import React from "react";

import NavBar from "./components/NavBar";

import { ItemList } from "./components/ItemList/ItemList";
import { ItemDetailContainer } from "./components/ItemList/ItemDetailContainer";


export default function App () {
  return (
    <div>
      <NavBar/>
      <ItemList/>
      <ItemDetailContainer/>
    </div>
  )
};