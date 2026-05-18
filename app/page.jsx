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
          <img
            src="/images/logo.png"
            alt="Carlos Fenoll"
            className="w-[160px] md:w-[260px] h-auto object-contain mix-blend-screen"
          />
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
