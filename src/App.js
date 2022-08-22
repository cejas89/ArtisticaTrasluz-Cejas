import React from "react";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemContainer from './components/ItemList/ItemContainer'


export default function App () {
  return (
    <div>
      <NavBar/>
      <ItemContainer/>
    </div>
  )
};