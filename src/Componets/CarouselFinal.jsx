import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const url = "https://appiyudith.herokuapp.com/peliculas";

const CarouselFinal = () => {
  const [peli, setPeli] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPeli(data));
  }, []);

  return (
    <Carousel>
      {peli.map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.Carrusel}
            alt="First slide"
            height= "600px"
           
          />
          <Carousel.Caption>
            <h3>{item.Title}</h3>
        </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselFinal;
