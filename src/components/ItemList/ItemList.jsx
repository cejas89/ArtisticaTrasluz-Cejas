import { Item } from './Item'
import { useParams } from 'react-router-dom'


export const ItemList = ({data}) => {

return (

    <>
        <div className="row row-cols-3 row-cols-md-4 g-4 m-2 p-5">
        {data.map(p => (
            <Item key={p.id} data = {p} />
        ))}
        </div>
   
    </>
  )
}
