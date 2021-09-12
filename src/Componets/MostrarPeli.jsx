import React, { Component } from 'react'

export default class MostrarPeli extends Component {

    render() {
        const  {Value, Poster}= this.props.movies
            return (
                <div className="container ms-1 text-center"  >
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <img src={Poster} className="" alt="..." width="245px" height="300px" />
                        <h5 className="card-value">{Value}/10</h5>
                    </div>
                    <div className="m-2">
                        <a className="btn"
                        href="/">
                        </a>
                    </div>
                  </div>
            </div>
            )
 }
}

