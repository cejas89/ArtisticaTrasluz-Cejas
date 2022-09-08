import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import customFetch from '../../utils/customFetch';

export const ItemDetailContainer = () => {
  const {productoId} = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(data);


  useEffect(() => {
    customFetch.then(data => {
      if(!productoId){
      setData(data)
      setLoading(false)
    } else {
      const nuevaData = data.find(producto => producto.id === productoId )
      setData(nuevaData);
      setLoading(false)
    }
    })
  }, []);

 console.log(data);

  
  return (
    <>
    {loading ? (
      <h1>
        Cargando.... <CircularProgress />
      </h1>
    ) : ( 
      <ItemDetail data={data}/>
      
    )}
    </>

    
  )
}
