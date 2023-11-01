import React from 'react'
import ItemCount from './ItemCount'
import '../estilos/container.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='container'>
      <h1>{greeting}</h1>
      <ItemCount />
    </div>
  )
}

export default ItemListContainer
