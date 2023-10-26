
import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Categorias = () => {
  return (
    <div className='categorias'>
      <Menu>
        <MenuButton><div className='menu-categorias'>Categorias<AiOutlineArrowDown className='flecha'/></div></MenuButton>
        <MenuList>
          <MenuItem as='a' href='#'>Computers</MenuItem>
          <MenuItem as='a' href='#'>Phones</MenuItem>
          <MenuItem as='a' href='#'>Watches</MenuItem>
          <MenuItem as='a' href='#'>Gadges</MenuItem>
        </MenuList>
      </Menu>

      <div className='buscador'>
        <input type="text" placeholder='Escriba para buscar' />
        <button>
          <BsSearch />
        </button>
      </div>

    </div>
  )
}

export default Categorias
