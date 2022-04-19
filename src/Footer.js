import React from 'react'
import NavBar from "./componentes/NavBar"

const Footer = () => {
  
  const edad = 30
  const saludo =()=>{}
  const links = ["tienda"]
  const footer=true
  return (
    <footer>
        <p>Todos los derechos reservados 2022</p>
        <NavBar 
        nombre="Tomas" 
        apellido="Martinez"
        edad={edad}
        onAdd={saludo}
        link={links}
        footer={footer}
         />
    </footer>
  )
}

export default Footer