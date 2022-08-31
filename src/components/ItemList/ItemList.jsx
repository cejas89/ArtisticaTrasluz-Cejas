import React, { useState, useEffect } from 'react'
import customFetch from '../../utils/customFetch'
import { Item } from './Item'
import { CircularProgress } from '@mui/material'
import { Prueba } from '../Prueba'


export const ItemList = () => {
 const [data, setData] = useState ([])
 const [loading, setLoading] = useState(true)

    useEffect(() => {
      customFetch.then(data => {
        setData(data)
        setLoading(false)
      })
    }, [])

    console.log(data);
    
  return (

    <>

    {
        loading ? <h1>Cargando.... <CircularProgress/></h1>
        :

        <div className="row row-cols-3 row-cols-md-4 g-4 m-2 p-5">
        {data.map(p => (
            <Prueba key={p.id} data = {p} />
        ))}
        </div>
    }
    </>
  )
}
