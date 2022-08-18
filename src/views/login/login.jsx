import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "./img/test_logo.png"
import "./style/login.css"

export default function login() {
    return (
        <div id="contenedorlogin">
            <div id="contenedorcentrado">
                <div id="login">
                    <form action="#" method="POST" id="loginform" >
                        <label htmlFor="usuario">Usuario</label>
                        <input id="usuario" type="text" name="userLogin" placeholder="Usuario" required />
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" type="password" placeholder="Contraseña" name="passLogin" required />
                        <Link to="/dashboard"><button type="submit" title="Ingresar" name="btnLogin">Iniciar sesión</button></Link>
                    </form>

                </div>
                <div id="derecho">
                    <div className="tituloimg">
                        <img className="logo" src={img1} />
                    </div>
                    <div className="titulo">
                        Iniciar sesión
                    </div>
                    <div className="pie-form">
                        <Link to="/error">Restablecer contraseña </Link>
                        <Link to="/error">¿No tienes Cuenta? Registrate</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
