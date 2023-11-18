import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({url, precio, nombre, detail}) => {

    return (
        <div>
            <div>
              <img src={url} alt="foto de producto" />  

              <p>
                {detail}
              </p>

              <p>
                {precio}
              </p>

              <p>
                {nombre}
              </p>
            </div>
            <ItemCount/>
        </div>
    )
}

export default ItemDetail
