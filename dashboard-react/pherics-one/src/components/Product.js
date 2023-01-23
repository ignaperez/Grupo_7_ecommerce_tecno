import React, { useEffect, useState } from 'react'
import "../assets/css/productDashboard.css"
import LastProduct from './LastProduct';
import ProductCard from './ProductCard'
import ProductCategory from './ProductCategory';
const Product = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/apiProduct")
            .then(res => res.json())
            .then(productos => {
                setProductos(productos.data)
            })
    }, [])

    return (
        <>
            <div className='contenedor-principal'>
                <div className="seccion-detalle-producto">

                    <ProductCategory />
                    
                    <div className='seccion-total-productos'>
                        <div className='contenedor-totales'>
                            <div className='contenedor-titulo-totales'>
                                <p className='titulo-totales'>Total de productos</p>
                            </div>
                            <div className='contenedor-texto-totales'>
                                <p className='texto-totales'><ion-icon name="desktop-outline" />{productos.length}</p>
                                <p className='texto-totales'>Cantidad:</p>
                            </div>
                        </div>
                    </div>

                    <LastProduct {...productos[productos.length -1]}/> 

                </div>
                <p className="tablero-titulo">Listado de productos</p>
                <div className="seccion-productos">
                    {
                        productos.map((producto, i) => {
                            return <ProductCard {...producto} key={i} />
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Product