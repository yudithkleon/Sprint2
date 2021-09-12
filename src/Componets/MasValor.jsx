import React, { Component } from 'react'
import MostrarPeli from './MostrarPeli'
import Navegador from './Navegador'

const url= 'http://localhost:3004/peliculas'

export default class MasValor extends Component {
    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        const resp = await fetch('http://localhost:3004/peliculas?Value_gte=7.7&Value_lte=10')
        const data = await resp.json()
        console.log(data)
        this.setState({ peli: data })
        console.log(this.state.peli)
    }

    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log('estoy enviando datso a la json')
            const resp = await fetch(url)
            const data = await resp.json()
            this.setState({ peli: data })

        }
           
        return (
            <div>
                <Navegador/>
                <div>
                    <h1>Peliculas Más Valoradas</h1>
                </div>
                <div className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5">
                    {
                        this.state.peli.map((movie, index) => {
                            return (
                                <MostrarPeli
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




