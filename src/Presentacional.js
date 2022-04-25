import React from 'react'
import { useState } from 'react'

const Presentacional = (props) => {
  
    const resultado = useState(0)

    console.log(resultado)

    const contador = resultado[0]
    const setContador = resultado[1]
    
    const handleClick=()=>{
        setContador(contador+1)
    }
    const handleClick2=()=>{
        if(contador>=1){
        setContador(contador-1)
        }
        else
        {
            alert("No se puede restar 0")
        }
    }
    return (
    <div>
        <h1>Contador={contador}</h1>
        <button onClick={handleClick}>Sumar</button>
        <button onClick={handleClick2}>Restar</button>
    

    </div>
  )
}

export default Presentacional