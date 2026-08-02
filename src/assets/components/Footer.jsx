import React from "react";

export default function Services() {
  const services = [
    { title: "Digital Design", desc: "Modern and creative solutions" },
    { title: "Awesome Support", desc: "24/7 customer assistance" },
    { title: "Easy to Customize", desc: "Flexible and scalable options" },
  ];

  return (
    <section className="services">
      <h3>Our Services</h3>
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
