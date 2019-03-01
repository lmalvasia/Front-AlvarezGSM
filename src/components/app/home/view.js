//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="Home text-center">
        <div className="content">
          <h2>"BIENVENIDO AL SITIO WEB"</h2>
        </div>
        <div className="tagline">
            <h3>Descripción:</h3>
            <p>Servicio técnico especializado en reparación de celulares, tablets y computadoras. Liberaciones y desbloqueos. 
            Venta de equipos y accesorios.</p>
        </div>
        <div className="info">
          <p><spam>Ubicacion:</spam> 9 de Julio 753 (2107 Alvarez)</p>
          <p><spam>Telefono:</spam> 3402-458393</p>
        </div>
      </div>
    );
  }
}

export default Home;
