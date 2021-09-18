import axios from "axios";
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { fileUpload } from "./helpers/fileUpload";
import Navegador from "./Navegador";
import { Div } from '../Style/Style';

const url = "https://appiyudith.herokuapp.com/peliculas";

export default class Peliculas extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            modalInsertar: false,
            modalEliminar: false,
            form: {
                id: '',
               Title: '',
               Description: '',
                Year: '',
                Poster: ''
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

    handleFileChange = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            document.getElementById('image').value = response;
        }).catch(error => {
            console.log(error.message)
        })
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

    SeleccionarPeliculas = (Peliculas) => {

         this.setState({
             tipoModal: 'actualizar',
             form: {
                id: Peliculas.id,
               Title: Peliculas.Title,
                Description: Peliculas.Description,
                Year: Peliculas.Year,
                Value: Peliculas.Value,
               Poster: Peliculas.Poster
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

    peticionDelete = async () => {
        await axios.delete(url+this.state.form.id)
        .then(response => {
            this.setState({modalEliminar:false});
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
                    <button className="btn btn-dark"
                    onClick={() => {this.setState({form: null, tipoModal: 'insertar'});this.modalInsertar()}}
                    >Peliculas</button>
                    <br /> <br />
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Description</th>
                                <th>Year</th>
                                <th>Poster</th>
                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map(peli => {
                                    return(
                                        <tr key={peli.id}>
                                            <td>{peli.id}</td>
                                            <td>{peli.Title}</td>
                                            <td>{peli.Description}</td>
                                            <td>{peli.Year}</td>
                                            <td><img src={peli.Poster} width="50px" height="70px" alt=""/></td>
                                            <button className="btn btn-primary"
                                             onClick={() => {this.SeleccionarPeliculas(peli); this.modalInsertar()}}>Ver</button>
                                             {" "}
                                             <button className="btn btn-danger"
                                             onClick={() => {this.SeleccionarPeliculas(peli); this.setState({modalEliminar: true})}}>X</button>
                                        </tr>
                                    )
                                })
                            }
                
                        </tbody>
                    </table>
                    <Modal isOpen={this.state.modalInsertar}>
                        <h1>Crear Peliculas</h1>
                        <ModalHeader style={{display: 'block'}}>
                        </ModalHeader>
                        <ModalBody>
                            <Div className="form-group">
                                <label htmlFor="id">id</label>
                                <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id:''}/>
                                <br/>
                                <label htmlFor="documento">Title</label>
                                <input className="form-control" type="text" name="documento" id="documento" onChange={this.handleChange} value={form?form.Title:''}/>
                                <br/>
                                <label htmlFor="Description">Description</label>
                                <input className="form-control" type="text" name="Description" id="Description" onChange={this.handleChange} value={form?form.Description:''}/>
                                <br/>
                                <label htmlFor="Year">Year</label>
                                <input className="form-control" type="text" name="Year" id="Year" onChange={this.handleChange} value={form?form.Year:''}/>
                                <br/>
                                <label htmlFor="telefono">Puntuacion</label>
                                <input className="form-control" type="text" name="Value" id="Value" onChange={this.handleChange} value={form?form.Value:''}/>
                                <br/>
                                <input
                                id="fileSelector"
                                type="file"
                                name="file"
                                style={{display: 'none'}}
                                onChange={this.handleFileChange}
                                />
                                <button className="btn btn-success "
                                onClick={() => this.handlePictureClick()}
                                >Poster</button>
                                <input
                                type="text"
                                name="Poster"
                                id="image"
                                value={form?form.Poster:''}
                                onBlur={this.handleChange}
                                />
                            </Div>
                        </ModalBody>
                        <ModalFooter>
                           {this.state.tipoModal==='insertar'}
                            <button className="btn btn-success m-2"
                            onClick={() => this.peticionesPost()}>
                                Agregar
                            </button>
                            <button className="btn btn-primary m-3"
                            onClick={() => this.peticionPut()}>
                                Actualizar
                            </button>
                            <button className="btn btn-danger m-2"
                             onClick={() => this.modalInsertar()}
                               >
                                Cancelar
                            </button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modalEliminar}>
                        <ModalBody>
                           Deseas Eliminar la Pelicula {form && form.Description}
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-danger m-2"
                            onClick={() => this.peticionDelete()}>Sí</button>
                            <button className="btn btn-secundary"
                            onClick={() => this.setState({modalEliminar:false})}>No</button>
                        </ModalFooter>
                    </Modal>
                </Div>
            </Div>
        )
    }
}
