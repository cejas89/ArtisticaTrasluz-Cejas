import React, { useState, useEffect } from 'react'
import customFetch from '../../utils/customFetch'
import { CircularProgress } from '@mui/material'
import { Item } from './Item'

export const ItemDetail = () => {
 const [data, setData] = useState ({})
 const [loading, setLoading] = useState(true)

    useEffect(() => {
      customFetch.then(response => {
        setData(response.find(prod => prod.id === 1))
        setLoading(false)
      })
    }, [])
    
  return (

    <>

    {
        loading ? <h1>Cargando.... <CircularProgress/></h1>
        :

        <div >
        {data.map(p => (
            <Item key={p.id} data = {p} />
        ))}
        </div>
    }
    </>
  )
}
