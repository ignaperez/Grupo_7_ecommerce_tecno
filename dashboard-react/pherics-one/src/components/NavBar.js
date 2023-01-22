import React, { useState } from 'react';
import "../assets/css/navBar.css"
import carretDown from "../assets/icons/carretDown.png"
const NavBar = () => {
  return (
    <>
      <div className='contenedor-principal-nav'>
        <div>
          <p className="frase-top">PhericsOne</p>
          {/* Barra de busqueda */}
        </div>
        <div>
          {/* Boton Dropdown */}
        </div>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <NavItem>
              <DropdownMenu/> 
            </NavItem>
            
          </ul>
        </nav>
        <div>

        </div>
      </div>
    </>
  )
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <li className='nav-item'>
        <a onClick={() => setOpen(!open)} href='#' className='icon-button'>
          <ion-icon name="caret-down-outline"></ion-icon>
        </a>

        {open && props.children}
      </li>
    </>
  )
}
const DropdownMenu = (props) => {
  const DropdownItem = (props) => {
    return (
      <a href='#' className='menu-item'>
        <ion-icon name={props.icono} style={{margin: 1 + "rem"}}></ion-icon>
        {props.children}
      </a>
    )
  }

  return(
  <div className='dropdown'>
    <DropdownItem icono="person-outline">Usuarios</DropdownItem>
    <DropdownItem icono="game-controller-outline">Productos</DropdownItem>
    <DropdownItem icono="arrow-back-outline">Inicio</DropdownItem>
    
  </div>
  )
}


export default NavBar