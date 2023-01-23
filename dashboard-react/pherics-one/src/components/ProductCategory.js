import React, { useEffect, useState } from 'react'

const ProductCategory = () => {

    const [categoria, setcategoria] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/apiProduct")
        .then(res => res.json())
        .then(categorias => {
            setcategoria(categorias.countByCategory)
        })
    },[])
    return (
        <div className='contenedor-categorias'>
            <div className='contenedor-titulo-categoria'>
            <p className='categorias-titulo'>Categorias</p>
            </div>
            {   
                 categoria.map((category, i) => {
                    return <Categoria {...category} key={i}/>
                })
            }
            {/* <p className='nombre-categoria'>Teclados</p>
            <p className='nombre-categoria'>Mouse</p>
            <p className='nombre-categoria'>Joystick</p>
            <p className='nombre-categoria'>Monitores</p>
            <p className='nombre-categoria'>Mousepads</p> */}
        </div>
    )

}
const Categoria = (props) => {  
    function mostrar() {
        let categoria = document.querySelector("#" + props.categoria)
        categoria.classList.toggle("hidden")
    }
    
    return(
            <div className='contenedor-datos-categoria'>
            <a onMouseOver={mostrar} onMouseLeave={mostrar} href="#" className='nombre-categoria'>{props.categoria}</a>
            <p className='total-categoria hidden'id={props.categoria}>{props.total}</p>
            </div>
        )
    }

export default ProductCategory