import React from 'react'
import CartWidget from "../componentes/CartWidget"

const navBar = (props) => {
console.log(props.nombre)
console.log(props.footer)
  

if(props.footer){
  return (
    <nav className="nav">
    <a className="nav_link" href="#">link 1</a>
    <a className="nav_link" href="#">{props.link}</a>
    <a className="nav_link" href="#">link 3</a>
    
    </nav>
  )
  }
  else
  {
    return (
      <nav className="nav">
      <CartWidget/>
      <a className="nav_link" href="#">{props.nombre}</a>
      <a className="nav_link" href="#">link 2</a>
      <a className="nav_link" href="#">link 3</a>
      </nav>
    )
  }
}

export default navBar