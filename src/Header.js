import NavBar from "./componentes/NavBar"

const Header = () => {
  return( <header className="header">
    <h1 className="header_titulo">JoyeriaLettini</h1>
    <NavBar nombre="Nacho" apellido="Lettini"/>
  </header>
  )
}

export default Header