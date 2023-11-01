import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'


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
          <MenuItem className='categoria' as='a' href='#'>Computers</MenuItem>
          <MenuItem className='categoria' as='a' href='#'>Phones</MenuItem>
          <MenuItem className='categoria' as='a' href='#'>Watches</MenuItem>
          <MenuItem className='categoria' as='a' href='#'>Gadges</MenuItem>
        </MenuList>
      </Menu>

      <div className='buscador'>
        <input type="text" placeholder='Escriba para buscar' />
        <button>
          <BsSearch className='lupita' />
        </button>
      </div>

    </div>
  )
}

export default Categorias
