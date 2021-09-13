import React, {useEffect, useState} from 'react'
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import axios from 'axios';

const url= "https://appiyudith.herokuapp.com/peliculas"

const CrudUsuario = () => {
//     const [statedata, setStatedata]= useState
//     const [stateform, setStateform]= useState

// useEffect (()=>{
//     getData()
// })

// async function getData() {
//     await axios.get(url)
//     .then(resp => {
//         setStatedata(resp.data)
//         console.log(resp.data)})
//     .catch(error => {console.log(error.message)} )
//   }

    return (
        <div>
        <div className="container">
            <Modal>
                    <h1>Crear Usuario</h1>
                    <ModalHeader style={{display: 'Usuario'}}>
                        <span style={{float: 'right'}}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input className="form-control" type="text" name="id" id="id" readOnly />
                            <br/>
                            <label htmlFor="documento">Documento</label>
                            <input className="form-control" type="text" name="documento" id="documento" />
                            <br/>
                            <label htmlFor="nombres">Nombres</label>
                            <input className="form-control" type="text" name="nombres" id="nombres" />
                            <br/>
                            <label htmlFor="apellidos">Apellidos</label>
                            <input className="form-control" type="text" name="apellidos" id="apellidos" />
                            <br/>
                            <label htmlFor="telefono">Teléfono</label>
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
                            >Imagen</button>

                            <input 
                            type="text"
                            name="image"
                            id="image"
                            />

                        </div>

                    </ModalBody>
                    <ModalFooter>
                      
                        <button className="btn btn-success">
                           Agregar
                        </button>
                        <button className="btn btn-primary"
                        >
                            Modificar
                        </button>
                        <button className="btn btn-danger"
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                <Modal>
                    <ModalBody>
                        Deseas Eliminar Usuario
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                       >Sí</button>
                        <button className="btn btn-secundary"
                       >No</button>
                    </ModalFooter>
              </Modal>
            </div>
        </div>
    )
}

export default CrudUsuario

