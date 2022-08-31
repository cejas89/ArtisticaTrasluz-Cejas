import React, { useState, useEffect } from 'react'
import customFetch from '../../utils/customFetch'
import { CircularProgress } from '@mui/material'
import { Item } from './Item'


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
            <Item key={p.id} data = {p} />
        ))}
        </div>
    }
    </>
  )
}
