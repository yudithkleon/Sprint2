import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Div } from '../Style/Style';

export default class MostrarPeli extends Component {
    render() {
        const { Value, Poster, Title, Description, Trailer, Year, Type } = this.props.movies
        return (
            <Div>
            <div className="container ms-3 text-center"  >
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <img src={Poster} className="" alt="..." width="180px" height="190px" />
                        <h7 className="card-value">{Value}/10</h7>
                    </div>
                    <div className="m-2">
                        <a className="btn"
                            href="/">
                        </a>
                    </div>
                </div>
            </div>
            
             {/* <Modal>
                    <h1>Modal de Peliculas</h1>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">{Title}</label>
                            <input className="form-control" type="text" name="id" id="id" readOnly />
                            <br/>
                            <label htmlFor="documento">{Description}</label>
                            <input className="form-control" type="text" name="description" id="documento" />
                            <br/>
                            <label htmlFor="nombres">{Year}</label>
                            <input className="form-control" type="text" name="nombres" id="nombres" />
                            <br/>
                            <label htmlFor="apellidos">{Value}</label>
                            <input className="form-control" type="text" name="apellidos" id="apellidos" />
                            <br/>
                            <label htmlFor="telefono">{Type}</label>
                            <input className="form-control" type="text" name="telefono" id="telefono" />
                            <br/>
                            <label htmlFor="celular">Celular</label>
                            <input className="form-control" type="text" name="celular" id="celular" />
                            <br/>
                                <input 
                            id="fileSelector"
                            type="file"
                            name="file"
                            />

                            <button className="btn btn-success"
                            >{Trailer}</button>

                            <input 
                            type="text"
                            name="image"
                            id="image"
                            />

                        </div>

                    </ModalBody>
                    <ModalFooter>
                      
                        <button className="btn btn-success">
                            Insertar
                        </button>
                        <button className="btn btn-primary"
                        >
                            Actualizar
                        </button>
                        <button className="btn btn-danger"
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>
                <Modal>
                    <ModalBody>
                        Está seguro de eliminar el superheroe
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                       >Sí</button>
                        <button className="btn btn-secundary"
                       >No</button>
                    </ModalFooter>
                </Modal> */}
            </Div>
           
      )
    }
}

