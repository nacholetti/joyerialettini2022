import React from 'react'

const Item = ({producto}) => {
  return (
    <article className='Card'>
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt="card"/>
      <p>Precio:{producto.precio}</p>
      <p>Categorias:{producto.categorias.map(categoria=><span>{categoria}</span>)}</p>
      <button>Detalles</button>
    </article>
  )
}

export default Item