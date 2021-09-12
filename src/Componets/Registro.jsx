import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Registro extends Component {
    render() {
        return (
            <div className="Registro py-5 container text-center">
                <form className="form-signin" onSubmit={this.handleSutmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        ¡Usuario de Peliculas!
                    </h1>
                    <div className="fadeIn first ">
                        <img 
                        src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/logo-blockBuster_ttrdcc.png" 
                        id="icon" 
                        alt="User Icon" 
                        width="100px"/>
                        <h3>Crea una cuenta de Usuario</h3>
                    </div>

                    <input
                        type="text"
                        placeholder="Primer Apellidos"
                        name="apellido_paterno"
                        className="form-control"
                        autoComplete="off"

                    />

                    <input
                        type="text"
                        placeholder="Segundo Apellido"
                        name="apellido_materno"
                        className="form-control"
                        autoComplete="off"

                        required=""

                    />

                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre Completo"
                        required=""

                    />

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required=""

                    />
                    
                    <input
                        type="foto"
                        name="foto"
                        className="form-control"
                        placeholder="Foto"
                        required=""

                    />
                    <input
                        type="Password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required=""
                    />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-1"
                    >
                        Registrar
                    </button>
                    <br />
                    <Link
                        to="/login"
                        className="link"
                    >
                        Te encuentras Registrado?
                    </Link>
                </form>
            </div>
        )
    }
}
