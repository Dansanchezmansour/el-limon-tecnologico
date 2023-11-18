import React from 'react'
import Item from './Item'

const ItemList = ({productosFiltrados}) => {

console.log(productosFiltrados)
    
    
  return (
    <div>
        <div className='contenedor-cards'>
        {productosFiltrados.map((p) => (
          <Item key={p.id} url={p.url} id={p.id} nombre={p.nombre} precio={p.precio} categoria={p.categoria} />
        ))}

      </div>
    </div>
  )
}

export default ItemList
