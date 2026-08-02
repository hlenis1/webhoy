import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsappIcon from './whatsApp.png'; // opcional, puedes usar el icono por defecto

function App() {
  return (
    <div>
      {/* tu contenido */}
      <FloatingWhatsApp 
        phoneNumber="573196946020"   // tu número en formato internacional
        accountName="Soporte StylePC" // nombre que se muestra
        avatar={whatsappIcon}         // icono personalizado (opcional)
        statusMessage="Responde normalmente en minutos"
        chatMessage="¡Hola! 👋 ¿En qué puedo ayudarte?"
      />
    </div>
  );
}

export default App;
