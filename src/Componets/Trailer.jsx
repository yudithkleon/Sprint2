import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Div, H1, Iframe } from "../Style/Style";
import Navegador from "./Navegador";

const url = "https://appiyudith.herokuapp.com/peliculas";

export default class Trailer extends Component {
  constructor() {
    super();
    this.state = {
      peli: [],
      searchTerm: "",
      error: "",
    };
  }

  async componentDidMount() {
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({ peli: data });
  }

  render() {
    return (
      <Div>
        <div>
          <Navegador />
        </div>
        <div>
          <H1>Estos son los Trailers</H1>
        </div>
        {this.state.peli.map((video) => {
          return (

                  <div>
                      <Iframe
                                      width="560"
                                      height="315"
                                      src={video.Trailer}
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowfullscreen
                                    ></Iframe>
                                    <h1>{video.Title}</h1>
                  </div>
          );
        })}

     </Div>
    );
  }
}
