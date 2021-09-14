import React, { Component } from 'react'
import MostrarPeli from './MostrarPeli'
import Navegador from './Navegador'
import { Div, H1 } from '../Style/Style'
import CarouselFinal from './CarouselFinal'

const url= 'https://appiyudith.herokuapp.com/peliculas'
export default class MenosValor extends Component {
    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        const resp = await fetch('https://appiyudith.herokuapp.com/peliculas?Value_gte=0.1&Value_lte=7.6')
        const data = await resp.json()
         this.setState({ peli: data })
    
    }

    
    render()
     {
        const handleSubmit = async (e) => {
            e.preventDefault();
           const resp = await fetch(url)
            const data = await resp.json()
            this.setState({ peli: data })

        }
        return (
            <Div>
                <div>
                <Navegador/>
                <CarouselFinal/>
                <div>
                    <H1>Peliculas Menos Valoradas</H1>
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
                
            </Div>
        )
    }
}

