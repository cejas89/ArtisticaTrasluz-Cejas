import React from "react";
import { ItemList } from "./ItemList";
import { ItemDetail } from "./ItemDetail";

export default function ItemContainer() {
  return ( 
    <>
    <ItemList/>

    <hr/>
    
    <ItemDetail/>
    </>
  )
}
