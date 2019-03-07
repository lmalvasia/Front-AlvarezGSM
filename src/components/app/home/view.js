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
          <div><i className="material-icons align-middle">room</i><span className="h6">Ubicacion:</span> 9 de Julio 753 (2107 Alvarez)</div>
          <div><i className="material-icons align-middle">phone_in_talk</i><span className="h6">Telefono:</span> 3402-458393</div>
        </div>
      </div>
    );
  }
}

export default Home;
