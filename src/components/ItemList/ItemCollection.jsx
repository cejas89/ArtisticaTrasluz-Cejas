import React from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import { db } from '../../utils/firebase'



export default function ItemCollection() {
  

    useEffect(() => {
        const getData = async () => {
        const query = collection(db,"items");
        const response = await getDocs(query);
        console.log(response)
        console.log(response.docs)
        const datos = response.docs.map(doc=> {
          const newDoc = {  
          ...doc.data(),
          id: doc.id
        }
        return newDoc;
      });
        
        console.log("datos", datos);
    }

        getData()

  }, [])
  
  
  
  
  
    return (
    <div>ItemCollection</div>
  )
}
