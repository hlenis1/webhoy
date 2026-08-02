export default function Services() {
  const services = [
  { 
    title: "Desarrollo de páginas web modernas", 
    desc: "Desarrollamos webs con la mejor tecnología, personalizadas y a tu medida." 
  },
  { 
    title: "Desarrollo con React.js", 
    desc: "Creamos interfaces dinámicas y rápidas con componentes reutilizables e integración con APIs." 
  },
  { 
    title: "Desarrollo con WordPress", 
    desc: "Diseñamos sitios corporativos, blogs y tiendas online con WooCommerce, optimizados para SEO." 
  },
  { 
    title: "Aplicaciones Web Personalizadas", 
    desc: "Construimos sistemas a medida como CRM, ERP y dashboards con seguridad y escalabilidad." 
  },
  { 
    title: "Optimización y Mantenimiento", 
    desc: "Actualizamos frameworks, corregimos errores y mejoramos el rendimiento de tu sitio." 
  },
  { 
    title: "Diseño Responsivo", 
    desc: "Adaptamos tu web para móviles, tablets y desktops, garantizando una experiencia óptima." 
  }
,

    { title: "Soporte en redes sociales", desc: "Autamatizamos y monitoreamos tus redes sociales para ayudarte a impulsar tu marca" },
    { title: "Desarrollo de apliacaiones moviles Android y Ios", desc: "Desarrollamos aplicaciones hibridas que se adaptan a culaquier dispositivo movil en todas las plataformas" },
  ];

  return (
    <section className="services">
      <h3>Nuestros servicios</h3>
      <div className="grid">
        {services.map((s, i) => (
          <div key={i} className="card">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
