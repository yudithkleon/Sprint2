import React, { Component } from 'react'
import MostrarPeli from '../Componets/MostrarPeli'
import Navegador from '../Componets/Navegador'
import 'bootswatch/dist/solar/bootstrap.min.css'
import { Div } from '../Style/Style'
import CarouselFinal from '../Componets/CarouselFinal'


const url = "https://appiyudith.herokuapp.com/peliculas"

export default class Principal extends Component {

    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm:'',
            error: '',
          
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
            <Div className="todo">
                <Navegador/>
                <CarouselFinal/>
               <Div className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5">
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
                </Div>
            </Div>

        )
    }
}
