import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'

export default function ItemContainer() {
    return (
        <div>
            <ItemListContainer
            producto = "Este es el primer texto" 
            descripcion = "Este es el segundo texto" 
            precio="150"/>   
            <ItemCount stock= "5" initial ="0"/>

        </div>
    )
}
