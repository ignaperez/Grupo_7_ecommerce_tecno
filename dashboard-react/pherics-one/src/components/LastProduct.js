import React from 'react'
import "../assets/css/lastProduct.css"
const LastProduct = (props) => {
    console.log(props);
    const contenedor = document.querySelector(".contenedor-grande")
    const punto = document.querySelectorAll(".punto")
    
    punto.forEach((unPunto, i) => {
        punto[i].addEventListener("click", () => {

            let posicion = i;
            let operacion = posicion * -52;

            contenedor.style.transform = `translateX(${operacion}%)`

            punto.forEach((unPunto, i) => {
                punto[i].classList.remove("activo")
            })
            punto[i].classList.add("activo")
        })
    })
    
    console.log(punto);
    return (
    <>
    <p className='ultimo-producto'>Ultimo producto creado</p>
    <div className='carrousel'>
        <div ref={contenedor} className='contenedor-grande'>
            <img src={props.pathImage_1} className='imagen-carrusel' alt=''/>
            <img src={props.pathImage_2} className='imagen-carrusel' alt=''/>
        </div>
        <ul className='puntos'>
            <li className='punto'></li>
            <li className='punto'></li>
        </ul>
        <div className='contenedor-datos-producto'>
            <p className='nombre-producto'>{props.titulo}</p>
            <div className='precio-producto'>
                <p className='info-p'>Precio:</p>
                <p className='info-p'>{props.precio}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default LastProduct