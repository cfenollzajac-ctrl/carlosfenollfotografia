"use client";
import { Inter, DM_Serif_Display } from "next/font/google";
import { useEffect } from "react";
import { Manrope } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  subsets: ["latin"],
});

export default function PhotographyPortfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");

          setTimeout(() => {
            entry.target.classList.remove("blur-sm");
          }, 60);
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");

setTimeout(() => {
  entry.target.classList.remove("blur-sm");
}, 60);
entry.target.classList.remove("blur-sm");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);
  const projects = [
    {
      title: 'Evento de Escuela de Cine',
      
      images: [
        '/images/filmschool1.jpg',
        '/images/filmschool2.jpg',
        '/images/filmschool3.jpg',
      ],
    },
    {
      title: 'Clase de Software de Postproducción',
      
      images: [
        '/images/class1.jpg',
        '/images/class2.jpg',
        '/images/class3.jpg',
      ],
    },
    {
      title: 'Visita Institucional',
      
      images: [
        '/images/eu1.jpg',
        '/images/eu2.jpg',
        '/images/eu3.jpg',
      ],
    },
  ];

  const services = [
    {
      title: 'Eventos Corporativos',
      description:
        'Cobertura fotográfica profesional para conferencias, encuentros y eventos empresariales.',
    },
    {
      title: 'Activaciones de Marca',
      description:
        'Cobertura de experiencias de marca, lanzamientos y campañas promocionales.',
    },
    {
      title: 'Eventos en Vivo',
      description:
        'Fotografía dinámica para conciertos, espectáculos y producciones de gran escala.',
    },
    {
      title: 'Eventos Privados',
      description:
        'Fotografía elegante para encuentros exclusivos y celebraciones.',
    },
  ];

  return (
    <div className={`${inter.className} bg-black text-white`}>
      {/* Hero */}
      <section className="relative h-[92vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-105 hover:scale-100 transition-transform duration-[5000ms]"
        />

       <div className="absolute bottom-10 md:bottom-16 left-6 md:left-12 max-w-xl"/>

        <div className="absolute bottom-10 md:bottom-16 left-6 md:left-12 max-w-xl">

  <h1 className={`${dmSerif.className} text-4xl md:text-6xl leading-none tracking-tight`}>
    Carlos Fenoll
  </h1>

  <p className="mt-4 text-sm md:text-base text-white/75 tracking-wide drop-shadow-sm">
    Fotografía de eventos · Madrid
  </p>

  <a
  href="#contact"
  className="inline-flex items-center mt-8 text-sm text-white/80 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors duration-300 tracking-wide"
>
  Contacto
</a>

</div>
      </section>

      {/* Fullscreen Gallery */}
      <section id="gallery" className="bg-black py-12 md:py-20">
  <div className="space-y-16 md:space-y-24">

    {projects.map((project, index) => (
      <div
        key={index}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >

        <div className="grid grid-cols-1 gap-3 md:gap-5">

          {project.images.map((img, i) => (
            <div
              key={i}
className="group w-full overflow-hidden"            >
              <img
                src={img}
className={`w-full object-cover md:object-cover object-center transition-transform duration-[1400ms] ease-out ${
  i % 5 === 0
    ? "h-[42vh] md:h-[92vh]"
    : i % 5 === 1
    ? "h-[38vh] md:h-[70vh]"
    : i % 5 === 2
    ? "h-[46vh] md:h-[86vh]"
    : i % 5 === 3
    ? "h-[40vh] md:h-[76vh]"
    : "h-[38vh] md:h-[100vh]"
} ${
  i % 2 === 0
    ? "brightness-100"
    : "brightness-95"
}`}
              />
            </div>
          ))}

        </div>

      </div>
    ))}

  </div>
</section>

      {/* Services */}
      <section className="py-24 px-6 md:px-16 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <section className="py-10 md:py-12 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 md:px-12">

    <div className="grid md:grid-cols-3 gap-10 md:gap-16">

      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
          Enfoque
        </p>

        <p className="text-sm text-white/55 leading-relaxed">
          Cobertura natural y discreta, centrada en el ambiente y las personas.
        </p>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
          Trabajo
        </p>

        <p className="text-sm text-white/55 leading-relaxed">
          Eventos culturales, encuentros institucionales y espacios educativos.
        </p>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
          Entrega
        </p>

        <p className="text-sm text-white/55 leading-relaxed">
          Selección y edición cuidada para uso editorial, institucional y digital.
        </p>
      </div>

    </div>

  </div>
</section>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-24 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Contacto
            </h2>

            <p className="text-neutral-500 text-lg leading-relaxed">
              Si te interesa trabajar conmigo, envíame un mensaje con algunos detalles sobre tu evento.
            </p>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />

            <input
              type="text"
              placeholder="Tipo de evento"
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />

            <textarea
              rows={5}
              placeholder="Cuéntame sobre tu evento..."
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />

            <button
              type="submit"
              className="w-full bg-white text-black rounded-2xl py-5 text-lg font-medium hover:scale-[1.01] transition-transform duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 px-6 md:px-16 border-t border-white/10 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Sobre mí
          </h2>

          <p className="text-xl text-neutral-300 leading-relaxed mb-8">
            Me interesa documentar eventos de una forma natural y discreta, prestando atención a la atmósfera, la interacción y los pequeños momentos que suelen pasar desapercibidos.
          </p>

          <p className="text-neutral-500 leading-relaxed text-lg max-w-3xl mx-auto">
            La mayor parte de mi trabajo hasta ahora proviene de entornos académicos e institucionales, donde he desarrollado un enfoque documental centrado en la observación y la autenticidad.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-neutral-500 text-sm bg-black">
        © 2026 Carlos Fenoll
      </footer>
    </div>
  );
}
