import React, { Component } from 'react'
import { Div } from '../Style/Style';

export default class MostrarPeli extends Component {
    render() {
        const { Value, Poster, Title, Description, Trailer, Year, Type } = this.props.movies
        return (
            <Div>
            <div className="container ms-3 text-center"  >
                <div className="col ">
                    <div >
                        <img src={Poster} className="" alt="..." width="250px" height="290px" />
                        <h5><img src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/estrellaA_zbroyq.png" me-6 />{Value}/10</h5>
                    </div>
                    <div className="m-2">
                        <a className="btn"
                            href="/">
                        </a>
                    </div>
                </div>
            </div>
           
     
            </Div>
           
      )
    }
}

