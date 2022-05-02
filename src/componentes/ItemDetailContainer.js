import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
  const[carga,setCarga]=useState(true)
  
  useEffect(()=>{
    const detalles= new Promise((res)=>{
      setTimeout(()=>{
        res(["Detalles"])
      },2500);
    })

    detalles
    .then(()=>{
      console.log=("Detalles Listos")
      setCarga(false)
    })

  })

  if(carga){
    return(
      <p>Completando Detalles..</p>
    )
  }
  else{

  return (
    <ItemDetail></ItemDetail>
  )
  }
}

export default ItemDetailContainer