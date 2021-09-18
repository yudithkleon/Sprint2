import axios from 'axios';
import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router';
import Navegador from './Navegador'
import { Iframe } from '../Style/Style';
import { Div } from '../Style/Style';

const url = "https://appiyudith.herokuapp.com/peliculas?id=";

const Detalle = () => {

    const [peli, setPeli] = useState([]);

    const {id} = useParams();
  
    const peticionGet = async () => {
      await axios
        .get(url + id)
        .then((res) => {
          console.log(res.data);
          setPeli(res.data[0]);

            })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      peticionGet();
    }, []);


      return (
        <Div>
            <Navegador />
            <Div>
                <figure className="figure d-flex container">
                    <img
                        src={peli.Poster}  
                        className="figure-img img-fluid rounded m-3"
                        alt="imagen" width="380px" height="320px" 
                    />
                    <Div>
                        <h4 className="m-3">{peli.Title}</h4>
                        <figcaption className="figure-caption m-3">
                        {peli.Description}
                        </figcaption>
                        <h6 className="m-3">Año : {peli.Year}</h6>
                        <h6 className="m-3">Puntuación {peli.Value}/10</h6>
                         <Iframe
                                      width="560"
                                      height="315"
                                      src={peli.Trailer}
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowfullscreen
                                    ></Iframe>
                     </Div>
                </figure>
            </Div>
        </Div>
    )
}

export default Detalle
