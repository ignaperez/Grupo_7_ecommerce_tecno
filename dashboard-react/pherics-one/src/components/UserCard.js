import React from 'react'

const UserCard = (props) => {
    
   

    return (
        <>
            <div className="contenedor-usuario">
                <div className="contenedorIMG">
                    <img className="user-image" src={props.pathImage} alt="" />
                </div>
                <div className="contenedor-datos">
                    <p className="parrafo-info">Id:{props.id}</p>
                    <p className="parrafo-info">Email:{props.email}</p>
                </div>
                <div className='contenedor-boton-detalle'>
                    <button  className='boton-detalle'>Detalle</button>
                </div>
            </div>
        </>
    )
}


export default UserCard