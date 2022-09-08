import React from 'react'
import { ItemList } from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
import { CircularProgress } from '@mui/material';

export const ItemListContainer = () => {

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
    {loading ? (
      <h1>
        Cargando.... <CircularProgress />
      </h1>
    ) : ( 
      <ItemList data={data}/>
      
    )}
    </>
  )
}
