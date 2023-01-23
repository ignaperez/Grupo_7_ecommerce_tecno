import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "../assets/css/navBar.css"
import Product from './Product';
import User from './User';
const NavBar = () => {
  return (
    <>
      <div className='contenedor-principal-nav'>
        <div>
          <p className="frase-top">PhericsOne</p>
          <p className='frase-top-baja'>dashboard</p>
          {/* Barra de busqueda */}
        </div>
        <div>
          {/* Boton Dropdown */}
        </div>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <NavItem>
              <DropdownMenu />
            </NavItem>
          </ul>
        </nav>
        <div>
        </div>
      </div>
      <Routes>
        {/* <Route path='/' element={ } /> */}
        <Route path='/' element={<Product />} />
        <Route path='/users' element={<User />} />
      </Routes>
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
      <Link to={props.ruta} className='menu-item'>
        <ion-icon name={props.icono} style={{ margin: 1 + "rem" }}></ion-icon>
        {props.children}
      </Link>
    )
  }

  return (
    <div className='dropdown'>
      <DropdownItem icono="person-outline" ruta="/users">Usuarios</DropdownItem>
      <DropdownItem icono="game-controller-outline" ruta="/">Productos</DropdownItem>
    </div>
  )
}


export default NavBar