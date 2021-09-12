import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from '../Componets/Login'
import MasValor from '../Componets/MasValor';
import MenosValor from '../Componets/MenosValor';
import Registro from '../Componets/Registro';
import Principal from '../Container/Principal';


export default class AppRou extends Component {
    render() {
        return (
          <Router>
              <Switch>
              <Route exact path="/Login" component= {Login}/>
              <Route exact path="/Registro" component= {Registro}/>
              <Route exact path="/MasValor" component= {MasValor}/>
              <Route exact path="/MenosValor" component= {MenosValor}/>
                  <Route exact path="/" component= {Principal}/> 
                  
              </Switch>
          </Router>
        )
    }
}
