import React, { Component } from 'react'
import Carrusel from './Carrusel'

const url = "https://appiyudith.herokuapp.com/peliculas"

export default class MostrarCarrusel extends Component {
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
                 <Carrusel/>
            </div>
        )
    }
}
