import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  const greeting = 'Bienvenidos al Limon Tecnológico'

  return (
    <div>
      <Navbar />
      <ItemListContainer
        greeting={greeting}
      />
    </div>
  )
}

export default App
