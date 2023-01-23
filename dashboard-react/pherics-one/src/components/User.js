import React, { useEffect, useState } from "react";
import "../assets/css/userDashboard.css"
import UserCard from "./UserCard";
import UserDetail from "./UserDetail";


const User = () => {

    const [usuarios, setUsuarios] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3001/apiUser")
        .then(res => res.json())
        .then(usuarios => {
            setUsuarios(usuarios.data)
        })
    })
    
    return (
        <>
            <div className="contenedor-principal-user">
                {/* Card para mostrar un usuario */}
                <section className="seccion-detalle-usuario">
                    <p className="titulo-ultimo-usuario">Ultimo usuarios registrado</p>
                    <UserDetail {...usuarios[usuarios.length - 1]}/>
                    <div className='contenedor-total-user'>
                        <div className='contenedor-titulo-user'>
                            <p className='titulo-total-usuario'>Usuarios registrados</p>
                        </div>
                        <div className='contenedor-texto-totales'>
                            <p className='texto-totales'><ion-icon name="person-outline" />{usuarios.length}</p>
                            <p className='texto-totales'>Cantidad:</p>
                        </div>
                    </div>

                </section>
                {/* Lista de usuarios */}
                <section className="seccion-lista-usuarios">
                    <p className="contenedor-detalle-titulo">Listado de usuarios</p>
                    {
                        usuarios.map((usuario, i) => {
                            return <UserCard {...usuario} key={i} />
                        })
                    }
                </section>

            </div>
        </>
    )
}

export default User