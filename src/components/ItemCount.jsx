import React, { useState } from 'react'
import '../estilos/cards.css'
import { useToast } from '@chakra-ui/react'




const ItemCount = () => {

    const [count, setCount] = useState(0)

    const toast = useToast()

    const addToCart = () => {
        if (count > 1) {
            toast({
                title: 'Felicitaciones!',
                description: `Has agregado ${count} productos al carrito`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }

        else if(count == 1){
            toast({
                title: 'Felicitaciones!',
                description: `Has agregado ${count} producto al carrito`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
        else{
            alert('Debes marcar una cantidad mayor a 0 para añadir al carrito')

        }


        /*  if(count > 1){
             alert(`Has agregado ${count} productos al carrito`)
         }
         else if(count == 1){
             alert(`Has agregado ${count} producto al carrito`)
         }
         else {
             alert('Debes marcar una cantidad mayor a 0 para añadir al carrito')
         } */
    }


    return (
        <div className='count'>
            <button className='button-menos' onClick={() => count > 0 && setCount(count - 1)}>
                -
            </button>

            <span className='nro-count'>
                {count}
            </span>

            <button className='button-mas' onClick={() => count < 10 && setCount(count + 1)}>
                +
            </button>

            <button onClick={addToCart} className='button-agregar-carrito'>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
