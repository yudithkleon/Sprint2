import axios from "axios";
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Navegador from "./Navegador";
import { Div } from "../Style/Style";


const url = "https://appiyudith.herokuapp.com/usuario";

export default class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            modalInsertar: false,
            form: {
                id: '',
               apellido: '',
               nombre: '',
                email: '',
                password: ''
            },
            tipoModal: ''
        }
    }

    componentDidMount(){
        this.peticionGet();
    }

    modalInsertar = () => {
        this.setState({modalInsertar: !this.state.modalInsertar})
    }

    handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    SeleccionarRegistro = (Registro) => {

         this.setState({
             tipoModal: 'actualizar',
             form: {
                id: Registro.id,
               apellido: Registro.apellido,
                nombre: Registro.nombre,
                email: Registro.email,
                Value: Registro.Value,
               password: Registro.password
             }
         })
    }

    peticionGet=()=>{
        axios.get(url)
        .then(response => {
            this.setState({data: response.data})
        })
        .catch(error => {
            // console.log(error.message);
        })
    }

    peticionesPost = async () => {
        delete this.state.form.id;
        await axios.post(url,this.state.form)
        .then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
             console.log(error.message);
        })
    }
   
    peticionPut = async () => {
        await axios.put(url+this.state.form.id,this.state.form)
        .then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }



    render() {
        const {form} = this.state;
        return (
            <Div>
                <Navegador/>
                <Div className="container">
                    <br />
                    <button className="btn btn-dark justify-content-center mt-10"
                    onClick={() => {this.setState({form: null, tipoModal: 'insertar'});this.modalInsertar()}}
                    >Registro</button>
                
                
                    <Modal isOpen={this.state.modalInsertar}>
                        <h1>Crear un nuevo Usuario</h1>
                            <ModalBody>
                            <Div className="form-group">
                                    <input className="form-control" placeholder="Ingrese Id" type="text" name="id" id="id"  onChange={this.handleChange} value={form?form.id:''}/>
                                <br/>
                             
                                <input className="form-control" placeholder="Ingrese Apellido" type="text" name="documento" id="documento" onChange={this.handleChange} value={form?form.apellido:''}/>
                                <br/>
                               
                                <input className="form-control" placeholder="Ingrese Nombre"type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre:''}/>
                                <br/>
                               
                                <input className="form-control" placeholder="Ingrese Email"type="text" name="email" id="email" onChange={this.handleChange} value={form?form.email:''}/>
                                <br/>
                                
                                <input className="form-control" placeholder="Ingrese Puntuación"type="text" name="Value" id="Value" onChange={this.handleChange} value={form?form.Value:''}/>
                                <br/>
                            </Div>
                        </ModalBody>
                        <ModalFooter>
                           {this.state.tipoModal==='insertar'}
                            <button className="btn btn-success m-2"
                            onClick={() => this.peticionesPost()} >
                                Agregar
                            </button>
                           <button className="btn btn-success m-2"
                             onClick={() => this.modalInsertar()}
                               >
                                Cancelar
                            </button>
                        </ModalFooter>
                    </Modal>
                
                </Div>
            </Div>       )
    }
}
