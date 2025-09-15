import React from "react";
import '../../styles/jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="card jumbotron bg-light pb-4">
      <div className="card-body">
        <h1 className="card-title">Jumbotron</h1>
        <p className="card-text">
        Este Jumbotron se creó utilizando una tarjeta de Bootstrap con la clase 
          <code> card</code>. Además, se personalizó con la clase <code>jumbotron </code> 
          definida en el archivo CSS para que ocupe el 100% del ancho disponible. 
          También se añadieron clases como <code>bg-light</code> para el fondo claro 
          y <code>pb-4</code> para agregar un margen inferior.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;