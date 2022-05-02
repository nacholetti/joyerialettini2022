import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListConteiner = () => {
    
  
  const[cargando,setCargando]=useState(true)
  
  useEffect(()=>{
    const pedido = new Promise((res)=>{

        setTimeout(() => {
          res(["producto1", "producto2", "producto3"])
        },2000);

        
    })

    pedido
    .then(()=>{
      console.log("Termino bien el pedido")
      setCargando(false)
    })


  })

  if(cargando){
    return(
      <p>Cargando..</p>
    )

  }
  else{

    return (
    
    <div>
      <ItemList/>
    </div>
     
  )
    }
}

export default ItemListConteiner