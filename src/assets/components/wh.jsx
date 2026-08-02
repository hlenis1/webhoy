import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";

const App = () => (
  <div className="flex items-center gap-3 p-6">
    <FaWhatsapp size={36} color="green" />
    <ReactWhatsapp 
      number="+57 3122093496" 
      message="¡Hola! Quiero más información sobre tus servicios." 
      element="button"
    >
      Contactar por WhatsApp
    </ReactWhatsapp>
  </div>
);

export default App;
