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

{/*     

        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vBumm7mYT_0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5JnWw_SvCvI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1VIZ89FEjYI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ydnzilTiBcY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LRMTr2VZcr8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zZqPA6GfIqQ?start=5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/a2cowVH03Xo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VJUnC2j9rgo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q7eZEZHRrVg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/omn2PJEuOTw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OESJJ2vZn9M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe> */}
      </Div>
    );
  }
}
