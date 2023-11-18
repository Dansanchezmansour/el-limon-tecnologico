import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Categorias = () => {


  return (
    <div className='categorias'>

      <Menu>
        <MenuButton>
          <div className='menu-categorias'>
            <span>Categorias</span>
            <span><MdOutlineKeyboardArrowLeft className='flecha' /></span>
          </div>
        </MenuButton>
        <MenuList>


          <Link to='/category/computers'><MenuItem className='categoria' as='a' href='#'>Computers</MenuItem></Link>

          <Link to='/category/phones'><MenuItem className='categoria' as='a' href='#'>Phones</MenuItem></Link>

          <Link to='/category/watches'><MenuItem className='categoria' as='a' href='#'>Watches</MenuItem></Link>

          <Link to='/category/gadget'><MenuItem className='categoria' as='a' href='#'>Gadget</MenuItem></Link>


        </MenuList >

      </Menu>

      <div className='buscador'>
        <input type="text" placeholder='Escriba para buscar' />
        <button>
          <BsSearch className='lupita' />
        </button>
      </div>

    </div >
  )
}

export default Categorias
