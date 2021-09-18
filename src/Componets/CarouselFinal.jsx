import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Div, DivA, Img } from "../Style/Style";

const url = "https://appiyudith.herokuapp.com/peliculas";

const CarouselFinal = () => {
  const [peli, setPeli] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPeli(data));
  }, []);

  const { id, Value, Poster, Title, Description, Trailer, Year, Type } = peli
  return (
    <Div>
      <Carousel>
      {peli.map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.Carrusel}
            alt="First slide"
            height= "400px"
           
          />
          <Carousel.Caption>
            <h3>{item.Title}</h3>
            <DivA>
            <Link to={`/Detalle/${id}`} class="verAhora" href="#">
            <Img src="https://res.cloudinary.com/danimel/image/upload/v1630787234/sprint2/verAhora_yx1yan.png"></Img>
                    </Link>
                    <a class="verDespues" href="#">
            <Img src="https://res.cloudinary.com/danimel/image/upload/v1630787234/sprint2/verDespues_hqofz7.png"></Img>
                    </a>
          </DivA>
        </Carousel.Caption>
        </Carousel.Item>
         ))}
        
    </Carousel>
        
    </Div>
    
  );
};

export default CarouselFinal;
