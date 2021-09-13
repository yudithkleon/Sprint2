import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import Buscador from './Buscador'
import Navegador from './Navegador'

const url = "http://localhost:3000/peliculas"

export default class MostrarTariler extends Component {

    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        const resp = await fetch(url)
        const data = await resp.json()
         this.setState({ peli: data })
    
    }

    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
              const resp = await fetch(url)
            const data = await resp.json()
            this.setState({ peli: data })

        }
           
        return (
            <div>
                <Navegador/>
              
                 <div>
                  {
                        this.state.peli.map((movie, index) => {
                            return (
                                <Buscador
                                    key={index}
                                    movies={movie}
                                />
                            )
                        })
                    }
                  </div>
   
            </div>
        )
}
}
