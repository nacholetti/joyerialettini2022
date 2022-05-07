import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'


const ProductosIniciales=[
  {
    id:1,
    nombre:"Anillo",
    precio:50,
    categorias:["oro"],
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6hzgXVRqrVaXOR_jODRxqrPeQq978BhBMw&usqp=CAU'
  },
  {
    id:2,
    nombre:"Cadena",
    precio:100,
    categorias:["plata"],
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6hzgXVRqrVaXOR_jODRxqrPeQq978BhBMw&usqp=CAU"
  },
  {
    id:3,
    nombre:"Aro",
    precio:150,
    categorias:["oro"],
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6hzgXVRqrVaXOR_jODRxqrPeQq978BhBMw&usqp=CAU"
  }
]


const ItemListConteiner = () => {
    
  
  const[cargando,setCargando]=useState(true)
  const[productos,setProductos]=useState([])
  
  useEffect(()=>{
    const pedido = new Promise((res)=>{

        setTimeout(() => {
          res(ProductosIniciales)
        },2000)

        
    })

    pedido
    .then(()=>{
      console.log("Termino bien el pedido")
      setCargando(false)
      setProductos(ProductosIniciales)
    },[])


  })

  if(cargando){
    return(
      <p>Cargando..</p>
    )

  }
  else{

    return (
    
      <ItemList productos={productos}/>
     
  )
    }
}

export default ItemListConteiner