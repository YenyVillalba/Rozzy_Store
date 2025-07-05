import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import Carrusel from '../../components/Carousel/Carousel';
import './Home.css';

import dama from '../../assets/images/damaa.png';
import caballero from '../../assets/images/Caballero1.png';
import niños from '../../assets/images/Niño1.png';
import promocion from '../../assets/images/Oferta1.png'; 
import baletaLinea from '../../assets/images/bl lna OS.png';
import baletaAnimal from '../../assets/images/bl ap OS.png';
import baletaMono from '../../assets/images/bl mñ OS.png';
import baletaVino from '../../assets/images/taconVino.jpg';
import baletaTache from '../../assets/images/bl tch OS.png';






const Home = () => {
  const categorias = [
    { name: 'Damas', image: dama },
    { name: 'Caballeros', image: caballero },
    { name: 'Niños', image: niños },
    { name: 'Pormociones', image: promocion },
  ];

  const productos = [
    { name: 'baleta Mono', image: baletaMono, price: '95.000' },
    { name: 'baleta linea', image: baletaLinea, price: '89.900' },
    { name: 'baleta tache', image: baletaTache, price: '95.000' },

    { name: 'baleta print', image: baletaAnimal, price: '65.000' },
    { name: 'baleta vino', image: baletaVino, price: '95.000' },


  ];

  return (
     <div className="fondo-general">
    <div className="contenedor-principal"> 
   

      
<section className="banner-bienvenida">
  
  <Carrusel /><h2 className="titulo-bienvenida">Moda, comodidad y estilo a tus pies</h2>

</section>


         {/* Categorías */}
    <section className="seccion-categorias">
  <h1 className="titulo-seccion">Categorías</h1>
  <div className="category-grid">
    {categorias.map((cat, index) => (
      <CategoryCard key={index} name={cat.name} image={cat.image} />
    ))}
  </div>
</section>

      <section className="seccion-productos">
  <h1 className="titulo-seccion">Productos Destacados</h1>
  <div className="product-grid">
    {productos.map((prod, index) => (
      <ProductCard key={index} name={prod.name} image={prod.image} price={prod.price} />
    ))}
  </div>
</section>

    </div>
    </div>
  );
};

export default Home;
