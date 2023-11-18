import React from 'react'
import { ItemListContainer, Navbar, Cart, Footer, ItemDetailContainer } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const greeting = 'Bienvenidos al Limon Tecnológico'

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/itemDetailContainer/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />


        </Routes>

        <Footer />
      </BrowserRouter>



    </div>
  )
}

export default App
