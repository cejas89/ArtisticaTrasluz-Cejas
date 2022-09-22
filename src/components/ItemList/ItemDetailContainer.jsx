import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import customFetch from '../../utils/customFetch';
import { collection, docs, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';

export const ItemDetailContainer = () => {
  const {productoId} = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const getData = async () => {
        const query = collection(db, "items")
        const response = await getDocs(query);
       // console.log(response)
      //  console.log(response.docs)
        const data = response.docs.map(doc=> {
          const newDocs = {
            ...doc.data(),
            id: doc.id
          } 
          return newDocs;
        } 
        )
        console.log(data);
        {
          if(!productoId){
          setData(data)
          setLoading(false)
        } else {
          const nuevaData = data.find(producto => producto.id === productoId )
          setData(nuevaData);
          setLoading(false)
        }
    }
  }

  return () => {
    getData()
  }
}, [])

/*
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
  }, []);*/

 //console.log(data);

  
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
