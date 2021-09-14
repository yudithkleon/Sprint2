import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {Link} from 'react-router-dom'
import { Div } from '../Style/Style'
import Navegador from './Navegador'

const url = 'https://appiyudith.herokuapp.com/usuario'

export default class Login extends Component {
//creamos el estado'
    constructor (){
        super()
            this.state = {
                form:{
                    username: '',
                    password: '' 
                }
            }
    }
        //iniciar sesion
        iniciarSeccion = async () =>{
            await axios.get(url, {params:{username:this.state.form.username, password: md5(this.state.form.password)}})
            .then((resp) => {return resp.data})
            .then ((resp) => {
                if (resp.length){
                    let respuesta= resp[0]; 
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`)
                }
                else{
                    alert ('Contraseña Incorreta / Usuario Invalido')
                }
            })
        }
    //SETSTATE es para el estado, mantenga la informacion actual + lo que estoy enviando
    //hasdle es una funcion para capturar el evento
    handleChange = async e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
                //[e.target.name]esto esta en la data e.target.value el valor que tiene
            }
        });
       // console.log(this.state.form) //imprimir todo el estado 
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.iniciarSeccion()
    }
    render() {
        return (
            <Div>
                <Navegador/>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}
                    name="username"
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    onChange={this.handleChange}
                    name="password"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Ingresar
                </button>

                    <Link
                    to="/CrudUsuario"
                    className="Link"
                   >
                    Crear Nuevo
                </Link>
            </form>
         
        </Div>
        )
    }
}
