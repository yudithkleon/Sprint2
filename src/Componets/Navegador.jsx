import React, { Component } from 'react'
import reactDom from 'react-dom'
import { Link } from 'react-router-dom'
import {Nav} from '../Style/Style'
import {Ul} from '../Style/Style'
import {P} from '../Style/Style'

export default class Navegador extends Component {
    render() {
        return (
            <Nav className="navbar-menu" >
                <nav className="navbar">
                    <div className="container-fluid">
                        
                        <div class="menu" id="menu">
                            <Ul class="navbar-nav ">
                            <a classN="navbar-brand" href="#"><img src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/logo-blockBuster_ttrdcc.png" width="90"></img></a>
                                <P class="nav-item">
                                    <Link class="nav-link" to="/">Todas</Link>
                                </P>
                                <P class="nav-item">
                                    <Link  class="nav-link" to="/MasValor">Mas Valoradas</Link>
                                </P>
                                <P class="nav-item">
                                    <Link class="nav-link" to="MenosValor">Menos Valoradas</Link>
                                </P>
                                <P class="nav-item">
                                    <Link class="nav-link" to="/Login">Usuarios</Link>
                                </P>
                                <P class="nav-item">
                                    <Link class="nav-link" to="/Trailer">Trailers</Link>
                                </P>
                                <form class="d-flex">
                                <form>
                                    <input
                                        type="text"
                                        name="searchTerm"
                                        placeholder="form-control"
                                        placeholder=" Pelicula a Buscar"
                                        
                                        onChange={(e) => this.setState({searchTerm: e.target.value })}
                                        value={this.setState.searchTerm}
                                        autoFocus
                                        
                                    />
                                     <button class="btn btn-outline-success" type="submit"><img src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/buscar_w5aorc.png" ></img></button>
                                </form>
                                
                            </form>
                            </Ul>
                           
                        </div>
                    </div>
                </nav>
            </Nav>


        )
    }
}
