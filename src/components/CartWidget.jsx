import React from 'react'
import { IoIosCart } from 'react-icons/io'


const CartWidget = () => {
    return (
        <button className='carrito'>
            <div><IoIosCart/></div>
            <span>2</span>
        </button>
    )
}

export default CartWidget
