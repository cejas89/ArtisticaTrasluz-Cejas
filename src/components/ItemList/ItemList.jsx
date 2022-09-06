import React, { useState, useEffect } from 'react'
import customFetch from '../../utils/customFetch'
import { CircularProgress } from '@mui/material'
import { Item } from './Item'
import { useParams } from 'react-router-dom'


export const ItemList = () => {

const {categoria} = useParams();
 const [data, setData] = useState ([])
 const [loading, setLoading] = useState(true)

 console.log(categoria);

    useEffect(() => {
      customFetch.then(data => {
        if(!categoria){
        setData(data)
        setLoading(false)
      } else {
        const nuevaData = data.filter(producto => producto.categoria === categoria )
        setData(nuevaData);
        setLoading(false)
      }
      })
    }, [categoria])

    console.log(data);
    
    
  return (

    <>

    {
        loading ? <h1>Cargando.... <CircularProgress/></h1>
        :

        <div className="row row-cols-3 row-cols-md-4 g-4 m-2 p-5">
        {data.map(p => (
            <Item key={p.id} data = {p} />
        ))}
        </div>
    }
    </>
  )
}
