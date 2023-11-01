import React from 'react'
import Categorias from './Categorias'
import CartWidget from './CartWidget'
import '../estilos/navbar.css'

const Navbar = () => {

    return (
        <div className='navbar'>
            <div>
                <img className='logo' src="../public/imgs/limon-tecnologico.png" alt="" />
            </div>
            <Categorias />
            <div className='contenedor-contact-carrito'>
                <span className='contact'>Contact</span>
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar
