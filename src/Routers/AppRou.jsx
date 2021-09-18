import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import CrudUsuario from '../Componets/CrudUsuario';
import Login from '../Componets/Login'
import MasValor from '../Componets/MasValor';
import MenosValor from '../Componets/MenosValor';
import Detalle from '../Componets/Detalle';
import Principal from '../Container/Principal';
import Trailer from '../Componets/Trailer';
import Buscador from '../Componets/Buscador';
import Registro from '../Componets/Registro';
import Peliculas from '../Componets/Peliculas';



export default class AppRou extends Component {
    render() {
        return (
          <Router>
           
              <Switch>
              <Route exact path="/Login" component= {Login}/>
              <Route exact path="/MasValor" component= {MasValor}/>
              <Route exact path="/MenosValor" component= {MenosValor}/>
              <Route exact path="/Trailer" component= {Trailer}/>
              <Route exact path="/Detalle/:id" component= {Detalle}/>
              {/* <Route exact path="/Buscador" component= {Buscador}/> */}
              <Route exact path="/Registro" component= {Registro}/>
              <Route exact path="/Peliculas" component={Peliculas}/>
                  <Route exact path="/" component= {Principal}/> 
                  <Redirect to="/" />
              </Switch>
          </Router>
        )
    }
}
