import React, { Component } from 'react'
import reactDom from 'react-dom'
import { Link } from 'react-router-dom'

export default class Navegador extends Component {
    render() {
        return (
            <nav class="navbar-menu">
                <nav class="navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/logo-blockBuster_ttrdcc.png"></img></a>
                        <div class="menu" id="menu">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Todas</Link>
                                </li>
                                <li class="nav-item">
                                    <Link  class="nav-link" to="/MasValor">Mas Valoradas</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="MenosValor">Menos Valoradas</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Login">Usuarios</Link>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <form>
                                    <input
                                        type="text"
                                        name="searchTerm"
                                        placeholder="form-control"
                                        placeholder=" Pelicula a Buscar"
                                        onChange={(e) => this.setState({ searchTerm: e.target.value })}
                                        value={this.setState.searchTerm}
                                        autoFocus
                                    />
                                </form>
                                <button class="btn btn-outline-success" type="submit"><img src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/buscar_w5aorc.png"></img></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </nav>


        )
    }
}
