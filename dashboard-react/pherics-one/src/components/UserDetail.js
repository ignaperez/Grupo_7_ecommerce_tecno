import React from 'react'

const UserDetail = (props) => {
    return (
        <>
            <div className="contenedor-detalles">
                <div className="contenedor-imagen">
                    {/* Imagen del usuario */}
                    <img className="imagen-usuario" src={props.pathImage} alt="imagen usuario" />
                </div>
                <div className="contenedor-info">
                    {/* Contenedor de la informacion de usuario */}
                    <div className="contenedor-info-hijo">
                        <p className="parrafo-detalle-titulo">Id:</p>
                        <p className="parrafo-detalle">{props.id}</p>
                    </div>
                    <div className="contenedor-info-hijo">
                        <p className="parrafo-detalle-titulo">Nombre:</p>
                        <p className="parrafo-detalle">{props.nombre}</p>
                    </div>
                    <div className="contenedor-info-hijo">
                        <p className="parrafo-detalle-titulo">Apellido:</p>
                        <p className="parrafo-detalle">{props.apellido}</p>
                    </div>
                    <div className="contenedor-info-hijo">
                        <p className="parrafo-detalle-titulo">Email:</p>
                        <p className="parrafo-detalle">{props.email}</p>
                    </div>
                    <div className="contenedor-info-hijo">
                        <p className="parrafo-detalle-titulo">Categoria:</p>
                        <p className="parrafo-detalle">{props.categoria_id === 2 ? "Usuario" : "Administrador" }</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail