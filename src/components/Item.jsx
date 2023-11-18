import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({ id, url, nombre, precio, categoria }) => {

    return (
        <div className='card'>
            <div>
                <img src={url} alt={nombre} />
            </div>
            <div className='texto-card'>
                <span>
                    {categoria.toUpperCase()}
                </span>
                <h2>
                    {nombre}
                </h2>
                <span className='precio'>
                    ${precio}
                </span>
            </div>

            <Link to={'/itemDetailContainer/'+id} className='ver-detalle'>Ver Detalle</Link>
        </div>
    )
}

export default Item
