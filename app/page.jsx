"use client";

import { Inter, Cormorant_Garamond } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export default function PhotographyPortfolio() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

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
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Evento de Escuela de Cine",
      images: [
        "/images/filmschool1.jpg",
        "/images/filmschool2.jpg",
        "/images/filmschool3.jpg",
      ],
    },
    {
      title: "Clase de Software de Postproducción",
      images: [
        "/images/class1.jpg",
      ],
    },
    {
      title: "Visita Institucional",
      images: [
        "/images/eu1.jpg",
        "/images/eu2.jpg",
      ],
    },
  ];

  return (
    <div className={`${inter.className} bg-black text-white`}>
      {/* Hero */}
      <section className="relative h-[92vh] md:h-screen overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-105 hover:scale-100 transition-transform duration-[5000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-10 md:bottom-16 w-full flex flex-col items-center z-10">
          <img
            src="/images/logo.png"
            alt="Carlos Fenoll"
            className="w-[280px] md:w-[440px] h-auto object-contain mix-blend-screen"
          />
          <p className="mt-1 text-sm md:text-base text-white/75 tracking-wide text-center">
            Cobertura de eventos culturales, académicos e institucionales.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center border border-white/25 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Contacto
            </a>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery */}
      <section id="gallery" className="bg-black pt-2 md:pt-3 pb-3 md:pb-4">
        <div className="space-y-2 md:space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 px-2 md:px-3">
              {project.images.length === 1 ? (
                <div className="relative md:col-span-12 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                  <img src={project.images[0]} alt={project.title} className="w-full h-[62vw] md:h-[78vh] object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                  </div>
                </div>
              ) : project.images.length === 2 ? (
                <>
                  <div className="relative md:col-span-7 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[0]} alt={project.title} className={`w-full h-[62vw] md:h-[54vh] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02] ${index === 2 ? 'object-[center_20%]' : 'object-center'}`} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                  <div className="relative md:col-span-5 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[1]} alt={project.title} className={`w-full h-[62vw] md:h-[54vh] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02] ${index === 2 ? 'object-[center_20%]' : 'object-center'}`} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                </>
              ) : index % 2 === 0 ? (
                <>
                  <div className="relative md:col-span-12 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[0]} alt={project.title} className="w-full h-[62vw] md:h-[78vh] object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                  <div className="relative md:col-span-7 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[1]} alt={project.title} className="w-full h-[62vw] md:h-[54vh] object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                  <div className="relative md:col-span-5 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[2]} alt={project.title} className="w-full h-[62vw] md:h-[54vh] object-cover brightness-95 object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative md:col-span-5 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[0]} alt={project.title} className="w-full h-[62vw] md:h-[54vh] object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                  <div className="relative md:col-span-7 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[1]} alt={project.title} className="w-full h-[62vw] md:h-[54vh] object-cover object-center brightness-95 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                  <div className="relative md:col-span-12 overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out group">
                    <img src={project.images[2]} alt={project.title} className="w-full h-[62vw] md:h-[78vh] object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-700 hidden md:flex items-end p-6">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/0 group-hover:text-white/55 transition-colors duration-700">{project.title}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-28 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3">
            <div className="border-t border-white/15 pt-8 pb-12 md:pb-0 md:pr-16">
              <p className="text-[52px] font-light text-white/[0.06] leading-none mb-4">01</p>
              <p className={`${cormorant.className} text-lg italic font-light text-white/70 mb-3`}>Enfoque</p>
              <p className="text-sm text-white/45 leading-relaxed">
                Cobertura natural y discreta, centrada en el ambiente y las personas.
              </p>
            </div>
            <div className="border-t border-white/15 pt-8 pb-12 md:pb-0 md:px-16">
              <p className="text-[52px] font-light text-white/[0.06] leading-none mb-4">02</p>
              <p className={`${cormorant.className} text-lg italic font-light text-white/70 mb-3`}>Trabajo</p>
              <p className="text-sm text-white/45 leading-relaxed">
                Eventos culturales, encuentros institucionales y espacios educativos.
              </p>
            </div>
            <div className="border-t border-white/15 pt-8 md:pl-16">
              <p className="text-[52px] font-light text-white/[0.06] leading-none mb-4">03</p>
              <p className={`${cormorant.className} text-lg italic font-light text-white/70 mb-3`}>Entrega</p>
              <p className="text-sm text-white/45 leading-relaxed">
                Selección y edición cuidada para uso editorial, institucional y digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Bio */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-t border-white/10 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-10">— Sobre mí</p>
          <p className={`${cormorant.className} text-2xl md:text-3xl font-light text-white/80 leading-relaxed max-w-2xl pl-5 border-l border-white/20`}>
            Soy Carlos, diplomado en cine documental, y fotógrafo especializado en eventos culturales e institucionales en Madrid. Trabajo de forma discreta y entregada, para que cada imagen refleje el ambiente real del evento.
          </p>
          <div className="mt-14 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 shrink-0">He trabajado con</p>
            <div className="flex items-center gap-12">
              <a href="https://ecam.es/" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo-ecam.png" alt="ECAM" className="h-14 w-auto object-contain mix-blend-screen opacity-75 hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="https://cinelenses.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo-cinelenses.png" alt="CineLenses" className="h-14 w-auto object-contain mix-blend-screen opacity-75 hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 md:py-36 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 md:gap-28 items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4">— Contacto</p>
            <h2 className={`${cormorant.className} text-5xl md:text-6xl font-light italic leading-tight mb-5`}>
              Trabajemos juntos
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Cada evento es diferente. Cuéntame los detalles y te preparo un presupuesto sin compromiso.
            </p>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-7"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSending(true);
              const formData = new FormData(e.target);
              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });
              const data = await response.json();
              setIsSending(false);
              if (data.success) {
                setIsSent(true);
                e.target.reset();
                setTimeout(() => setIsSent(false), 4000);
                if (typeof fbq !== "undefined") fbq("track", "Lead");
              }
            }}
          >
            <input type="hidden" name="access_key" value="44068ee9-1d29-4d0d-bc5f-d7f291934609" />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/50 transition-colors"
            />
            <input
              type="text"
              name="contact"
              placeholder="Teléfono o correo electrónico"
              required
              className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/50 transition-colors"
            />
            <input
              type="text"
              name="event"
              placeholder="Tipo de evento"
              required
              className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/50 transition-colors"
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Detalles sobre tu evento..."
              className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/50 transition-colors resize-none"
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSending}
                className="w-full border border-white/25 py-4 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40"
              >
                {isSending ? "Enviando..." : isSent ? "Mensaje enviado" : "Enviar mensaje"}
              </button>

              {isSent && (
                <p className="text-xs text-white/35 text-center pt-4 tracking-wide">
                  Gracias — responderé lo antes posible.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/25">
          <span>© 2026 Carlos Fenoll Photo</span>
          <div className="flex gap-8">
            <a href="https://instagram.com/carlosfenollphoto" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/carlos-fenoll-zajac/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
