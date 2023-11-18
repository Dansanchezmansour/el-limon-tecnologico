import { useState, useEffect } from 'react'
import '../estilos/itemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {


  class Producto {
    constructor(url, nombre, precio, categoria, id, detail) {
      this.url = url
      this.nombre = nombre
      this.precio = precio
      this.categoria = categoria
      this.id = id
      this.detail = detail
    }
  }

  const comMacPro = new Producto('../../public/imgs/comMacPro.png', 'Apple Mac Book Pro', 950, 'computers', 'com1', 'Procesador: Gama baja o media. Memoria RAM: Cantidad mínima. Almacenamiento: Unidad SSD de capacidad limitada. Pantalla: Tamaño y resolución estándar. Tarjeta gráfica: Integrada, adecuada para tareas cotidianas. Puertos: Número limitado. Diseño: Estética característica de Apple. Precio: Más asequible que modelos de mayor especificación en la misma línea de productos.')

  const phoSamsungA02 = new Producto('../../public/imgs/phoSamsungA02.png', 'Samsung A02', 200, 'phones', 'pho1', 'El Samsung Galaxy A02 es un teléfono inteligente de gama baja con una pantalla estándar, una cámara básica, una batería de capacidad moderada y un precio asequible.')

  const compHp16GB = new Producto('../../public/imgs/comHP16GB.png', 'HP de escritorio 16GB', 980, 'computers', 'com2', 'Una computadora HP con 16GB de RAM es una máquina con una cantidad sólida de memoria que permite un rendimiento multitarea más rápido y fluido, adecuada para tareas de productividad y entretenimiento.')

  const phoIphone = new Producto('../../public/imgs/phoIphon.png', 'Iphone 7', 810, 'phones', 'pho2', 'Un iPhone de nivel de entrada tiene un diseño compacto, una sola cámara, una pantalla estándar y un rendimiento adecuado para tareas cotidianas.')

  const comTabletsPro = new Producto('../../public/imgs/comTabletsPro.png', 'Ipad Pro 11', 700, 'computers', 'com3', 'Pantalla de tamaño estándar, un procesador modesto, una sola cámara, capacidad de almacenamiento limitada y es adecuada para tareas ligeras como navegación web y reproducción de medios.')
  
  const comParlante = new Producto('../../public/imgs/comParlante.png', 'Parlante Pelota', 300, 'computers', 'com4', 'Un altavoz Bluetooth para computadora se conecta inalámbricamente, ofrece calidad de sonido variable, puede tener batería recargable y controles integrados, siendo compacto y portátil.')

  const comLenovo8GB = new Producto('../../public/imgs/comLenovo8GB.png', 'Lenovo de escritorio 8GB', 850, 'computers', 'com5', '8GB de RAM es una máquina con una cantidad razonable de memoria que proporciona un rendimiento decente para tareas cotidianas como navegación web, procesamiento de documentos y multitarea básica.')

  const watSamsungNegro = new Producto('../../public/imgs/watSamsungNegro.png', 'Reloj Samsung Negro', 350, 'watches', 'wat1', 'Funciones como seguimiento de actividad física, notificaciones de smartphone y varias aplicaciones, adecuado para uso diario y con un aspecto elegante.')

  const comXDR = new Producto('../../public/imgs/comXDR.png', 'Pro Display XDR', 1100, 'computers', 'com6', 'La computadora XDR es una potente máquina con una pantalla de 30 pulgadas y resolución 8K. Cuenta con un procesador avanzado, 32 GB de RAM y un SSD de 2 TB. Su diseño es minimalista en titanio y ofrece una seguridad sólida. Funciona con el sistema operativo XDR OS para un rendimiento excepcional.')

  const gadJoystic = new Producto('../../public/imgs/gadJoystic.png', 'GamePad Xbox One X', 470, 'gadget', 'gad1', 'Ofrece una experiencia de juego ergonómica y cuenta con tecnología háptica para una retroalimentación táctil precisa, una batería recargable, y un panel táctil para interacciones adicionales en los juegos. También tiene altavoces integrados y un conector para auriculares, lo que lo hace versátil para juegos y comunicación.')

  const watRolexBlanco = new Producto('../../public/imgs/watRolexBlanco.png', 'Rolex Smart Blanco', 600, 'watches', 'wat2', 'reloj de lujo muy reconocido, con diseño elegante y alta calidad. Destaca por su durabilidad, precisión y estatus.')

  const gadPulso = new Producto('../../public/imgs/gadPulso.png', 'Medidor de pulso', 500, 'gadget', 'gad2', 'mide la frecuencia cardíaca de una persona, proporcionando una indicación de las pulsaciones por minuto. Por lo general, es portátil y puede llevarse en la muñeca como un reloj o en el dedo. Se utiliza para monitorear la salud y el rendimiento físico.')

  const comAsusPro = new Producto('../../public/imgs/comAsusPro.png', 'Asus 12GB', 1200, 'computers', 'com7', 'Una notebook Asus es una computadora portátil fabricada por Asus, una marca conocida por su rendimiento y calidad de construcción. Puede variar en especificaciones según el modelo, pero generalmente ofrece un equilibrio entre rendimiento, diseño y precio. Las notebooks Asus suelen incluir pantallas de alta resolución, procesadores potentes, opciones de almacenamiento variadas y un diseño atractivo.')

  const watTissot = new Producto('../../public/imgs/watTissot.png', 'Tissot Cuadrado', 660, 'watches', 'wat3', ' reloj suizo conocido por su calidad y estilo. Ofrece una amplia gama de modelos, desde deportivos hasta elegantes, con precisión suiza en el movimiento y una atención al detalle en el diseño. Los relojes Tissot son valorados por su artesanía y se adaptan a diversas preferencias y presupuestos.')

  const phoMotorolaA01 = new Producto('../../public/imgs/phoMotorolaA01.png', 'Motorola A01', 250, 'phones', 'pho3', 'El Motorola A01 es un teléfono asequible con pantalla HD de 6.2 pulgadas, batería de larga duración, cámara principal de 13 megapíxeles y almacenamiento de 32GB. Perfecto para un uso básico y un presupuesto ajustado.')

  const productos = [
    comMacPro, phoSamsungA02, compHp16GB, phoIphone, comTabletsPro, comParlante, comLenovo8GB, watSamsungNegro, comXDR, gadJoystic, watRolexBlanco, gadPulso, comAsusPro, watTissot, phoMotorolaA01
  ]

  const { category } = useParams()

  const [productosFiltrados, setProductosFiltrados] = useState(productos)

  useEffect(()=> {

    if(category){
      setProductosFiltrados(productos.filter((p) => p.categoria == category))
    }
    else{
      setProductosFiltrados(productos)
    }

  }, [category])

  return (
    <div>
      <ItemList productosFiltrados= {productosFiltrados}/>
    </div >
  )
}

export { ItemListContainer }
