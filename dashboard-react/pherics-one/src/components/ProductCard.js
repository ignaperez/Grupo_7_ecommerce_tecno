import React from 'react'


const ProductCard = (props) => {
    let imagen = `http://localhost:3001/img/productos/${props.imagen1}`
    return (
        <>
            <article className="tablero-de-productos" id={props.categoria.nombre}>
                <div className="caja-imagen">
                    <img 
                    className="imagen-dashboard" 
                    // src={props.imagen}
                    src={imagen}
                    alt="imagen producto" />
                </div>
                <div className="caja-titulo">
                    <p className="titulo-producto">{props.titulo}</p>
                </div>
            </article>
        </>
    )
}

export default ProductCard