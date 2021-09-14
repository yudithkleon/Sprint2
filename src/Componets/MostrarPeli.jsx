import React, { Component } from 'react'
import { Div } from '../Style/Style';

export default class MostrarPeli extends Component {
    render() {
        const { Value, Poster, Title, Description, Trailer, Year, Type } = this.props.movies
        return (
            <Div>
            <div className="container ms-3 text-center"  >
                <div className="col">
                    <div className="card text-white  mb-3">
                        <img src={Poster} className="" alt="..." width="250px" height="290px" />
                        <h7 className="card-value">{Value}/10</h7>
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

