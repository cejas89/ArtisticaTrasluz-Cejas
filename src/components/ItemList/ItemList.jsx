import React, { useState, useEffect } from 'react'
import customFetch from '../../utils/customFetch'
import { Item } from './Item'
import { CircularProgress } from '@mui/material'

export const ItemList = () => {
 const [data, setData] = useState ([])
 const [loading, setLoading] = useState(true)

    useEffect(() => {
      customFetch.then(data => {
        setData(data)
        setLoading(false)
      })
    }, [])
    
  return (

    <>

    {
        loading ? <h1>Cargando.... <CircularProgress/></h1>
        :

        <div className='itemContainer'>
        {data.map(p => (
            <Item key={p.id} data = {p} />
        ))}
        </div>
    }
    </>
  )
}
