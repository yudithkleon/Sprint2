import React, { Component } from 'react'
import Modificar from '../Componets/Modificar'
import MostrarPeli from '../Componets/MostrarPeli'
import Navegador from '../Componets/Navegador'
import Registrar from '../Componets/Registrar'
import Scroll from '../Componets/Scroll'
import 'bootswatch/dist/solar/bootstrap.min.css'

const url= "http://localhost:3004/peliculas"

export default class Principal extends Component {

    constructor()   {
        super()
        this.state = {
            peli: [],
            searchTerm:'',
            error: ''
        }
    }
    
    async componentDidMount(){
        const resp = await fetch(url)
        const data = await resp.json()
        this.setState ({peli:data})
        console.log(this.state.peli)
    }
 
     render() {
        const handleSubmit = async (e)=>{
            e.preventDefault();
            const resp = await fetch(url)
            const data = await resp.json()
            this.setState({peli: data})
        
        }
        return (
            <div>
                 <Navegador/>
                         
            <div className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5">
           {    
             this.state.peli.map((movie, index)=>{
                   return (
                    <MostrarPeli
                        key={index}
                        movies={movie}
                     />
                )
            })
         }   
                <Modificar/>
                <Registrar/>
                <Scroll/>
          </div>
          </div>
        )
    }
}
