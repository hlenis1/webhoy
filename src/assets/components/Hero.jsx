import React from "react";
// import logo from "../stylepc.png"; // tu ruta original, no la cambioimport "./AnimatedTitle.css";
import "./AnimatedTitle.css";

export default function Hero() {
  return (
    <section className="hero p-6">
      {/* Logo en la parte superior izquierda */}
      {/* <div className="flex items-start mb-4">
        <img 
          src={logo} 
          alt="StylePC logo" 
          style={{ width: "300px", height: "auto" }} // tamaño fijo en px
        />
      </div> */}

      {/* Contenido principal */}
      <h2 className="animated-title">stylepc</h2>
      <h2 className="text-3xl font-bold">Desarrollamos software</h2>
      <p className="text-lg text-gray-700">Hacemos realidad tus ideas</p>
      <div className="buttons mt-4 flex gap-3">
        <button className="primary bg-blue-600 text-white px-4 py-2 rounded">
          Inicia ya
        </button>
        <button className="secondary border border-blue-600 text-blue-600 px-4 py-2 rounded">
          Algunos de nuestros proyectos
        </button>
      </div>
    </section>
  );
}
