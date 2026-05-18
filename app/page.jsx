"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
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
        "/images/class2.jpg",
        "/images/class3.jpg",
      ],
    },
    {
      title: "Visita Institucional",
      images: [
        "/images/eu1.jpg",
        "/images/eu2.jpg",
        "/images/eu3.jpg",
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
        <div className="absolute bottom-10 md:bottom-16 left-6 md:left-12 max-w-xl z-10">
          <div className="relative w-[320px] md:w-[520px]">
            <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px] rounded-2xl" />
            <img
              src="/images/logo.png"
              alt="Carlos Fenoll"
              className="relative z-10 w-full h-auto object-contain opacity-95"
            />
          </div>
          <p className="mt-6 text-sm md:text-base text-white/75 tracking-wide">
            Fotografía de eventos · Madrid
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center border border-white/20 px-6 py-3 rounded-full text-sm tracking-wide text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery */}
      <section id="gallery" className="bg-black py-12 md:py-20">
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 gap-3 md:gap-5">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="group w-full overflow-hidden fade-item opacity-0 translate-y-6 blur-sm transition-all duration-[900ms] ease-out"
                  >
                    <img
                      src={img}
                      alt={project.title}
                      className={`w-full object-cover object-center transition-transform duration-[1400ms] ease-out ${
                        i % 5 === 0
                          ? "h-[42vh] md:h-[92vh]"
                          : i % 5 === 1
                          ? "h-[38vh] md:h-[70vh]"
                          : i % 5 === 2
                          ? "h-[46vh] md:h-[86vh]"
                          : i % 5 === 3
                          ? "h-[40vh] md:h-[76vh]"
                          : "h-[38vh] md:h-[100vh]"
                      } ${i % 2 === 0 ? "brightness-100" : "brightness-95"}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-10 md:py-12 border-t border-white/10 bg-neutral-950">
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

      {/* Contact */}
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

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
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
              }
            }}
          >
            <input type="hidden" name="access_key" value="44068ee9-1d29-4d0d-bc5f-d7f291934609" />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="text"
              name="event"
              placeholder="Tipo de evento"
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Cuéntame sobre tu evento..."
              className="w-full bg-transparent border border-white/15 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
            />

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-white text-black rounded-2xl py-5 text-lg font-medium transition-all duration-300 hover:scale-[1.01] disabled:opacity-70"
            >
              {isSending ? "Enviando..." : isSent ? "Mensaje enviado" : "Enviar mensaje"}
            </button>

            {isSent && (
              <p className="text-sm text-white/60 text-center pt-2 animate-pulse">
                Gracias — responderé lo antes posible.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-neutral-500 text-sm bg-black">
        © 2026 Carlos Fenoll Photo
      </footer>
    </div>
  );
}

