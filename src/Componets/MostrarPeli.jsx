import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Div } from '../Style/Style';


export default class MostrarPeli extends Component {
    render() {
        const { id, Value, Poster, Title, Description, Trailer, Year, Type } = this.props.movies
        return (
            <Div>
            <Div className="container ms-3 text-center"  >
                <Div className="col ">
                    <Div >
                        <Link to={`/Detalle/${id}`}><img src={Poster} className="" alt="..." width="250px" height="290px" /></Link>
                        <h5><img src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/estrellaA_zbroyq.png" me-6 />{Value}/10</h5>
                    </Div>
                    <Div className="m-2">
                        <a className="btn"
                            href="/">
                        </a>
                    </Div>
                </Div>
            </Div>
           
     
            </Div>
           
      )
    }
}

