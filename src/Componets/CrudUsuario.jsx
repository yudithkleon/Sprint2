import React, {useEffect, useState} from 'react'
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import axios from 'axios';

const url= 'http://localhost:3004/peliculas'

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
            <h1>estoy en crud</h1>
        </div>
    )
}

export default CrudUsuario

