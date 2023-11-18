import React from 'react'
import Categorias from './Categorias'
import CartWidget from './CartWidget'
import '../estilos/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='navbar'>
            <div>
                <Link to='/'>
                    <img className='logo' src="../public/imgs/limon-tecnologico.png" alt="" />
                </Link>
            </div>
            <Categorias />
            <div className='contenedor-contact-carrito'>
                <span className='contact'>Contact</span>
                <Link to='/cart'>
                    <CartWidget />
                </Link>

            </div>
        </div>
    )
}

export { Navbar } 
