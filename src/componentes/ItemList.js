
import React, { useEffect, useState } from 'react'

const productosIniciales =
[
  {
    id:1,
    nombre:"Anillo",
    precio:500
  }
  ,
  {
    id:2,
    nombre:"Aro",
    precio:350
  }
  ,
  {
    id:3,
    nombre:"Cadena",
    precio:200
  }
]


const ItemList = () => {

    const[productos,setProductos]=useState([])
   
    useEffect (()=>{

        console.log("Pedido de productos")
    
        setTimeout(()=>{
        console.log("Recibo Productos.")
        setProductos(productosIniciales)
      },2000)
    
        
    
      },[])
  
    return (
    <ul>
        {productos.map((producto, indice)=>{
            console.log(producto, indice)
            return<li key={producto.id}>{producto.nombre}</li>
        })}
    </ul>
  )
}

export default ItemList