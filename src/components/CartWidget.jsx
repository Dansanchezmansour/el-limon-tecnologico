import React from 'react'
import { IoIosCart } from 'react-icons/io'



const CartWidget = () => {
    
let valorDeCarrito = 8

    return (
        <button className='carrito'>
            <div><IoIosCart /></div>
            <span>{valorDeCarrito}</span>
        </button>
    )
}

export default CartWidget
