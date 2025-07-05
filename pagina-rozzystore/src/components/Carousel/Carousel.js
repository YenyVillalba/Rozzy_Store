import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';



import descuento from '../../assets/images/descuento.png';
import plataforma from '../../assets/images/PL yute LA.png';
import tacon from '../../assets/images/TCN BLANCO LV.png';
import nude from '../../assets/images/PL NUDEYUTE LA.png';

const Carrusel = () => {
  const imagenes = [descuento, plataforma, tacon, nude];

    return (
    <div className="carrusel-container"> 
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {imagenes.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Carrusel;
