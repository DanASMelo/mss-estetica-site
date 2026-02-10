"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511940301423&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

const slides = [
  {
    id: 1,
    bgColor: "bg-primary",
    title: "Realce sua",
    titleHighlight: "Beleza Natural",
    description:
      "Tratamentos estéticos personalizados com ciência, técnica e cuidado. Sua jornada de autocuidado começa aqui.",
    cta: "Agende sua Avaliação",
    ctaLink: WHATSAPP_URL,
    image: "/images/sonia-cerejeira.jpeg",
  },
  {
    id: 2,
    bgColor: "bg-accent",
    title: "Massagem, Drenagem,",
    titleHighlight: "Limpeza de Pele e mais",
    description:
      "Mais de 11 tipos de tratamentos para cuidar do seu corpo e da sua pele com profissionalismo.",
    cta: "Conheça os Serviços",
    ctaLink: "#servicos",
    image: "/images/tratamento-massagem.jpeg",
  },
  {
    id: 3,
    bgColor: "bg-primary",
    title: "Avaliação",
    titleHighlight: "Gratuita",
    description:
      "Agende agora pelo WhatsApp e ganhe uma avaliação personalizada para seu tratamento ideal.",
    cta: "Agendar pelo WhatsApp",
    ctaLink: WHATSAPP_URL,
    image: "/images/sonia-profissional.jpeg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const isExternal = slide.ctaLink.startsWith("http");

  return (
    <section id="inicio" className="relative pt-[100px] md:pt-[132px]">
      <div className={`${slide.bgColor} transition-colors duration-500 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text + mobile image */}
            <div key={slide.id} className="text-white animate-carousel-in">
              {/* Mobile image - circular */}
              <div className="lg:hidden flex justify-center mb-6">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                  <Image
                    src={slide.image}
                    alt="MSS Estética"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="144px"
                  />
                </div>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight mb-6 text-center lg:text-left">
                {slide.title}
                <br />
                <span className="text-white/90">{slide.titleHighlight}</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-lg mb-8 leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                {slide.description}
              </p>
              <div className="text-center lg:text-left">
                <a
                  href={slide.ctaLink}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-block bg-white text-primary font-display font-bold text-base sm:text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 uppercase tracking-wide"
                >
                  {slide.cta}
                </a>
              </div>
            </div>

            {/* Desktop image */}
            <div key={`img-${slide.id}`} className="relative hidden lg:block animate-carousel-in">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={slide.image}
                  alt="MSS Estética"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 pb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-foreground-muted text-sm mt-1">Anos de experiência</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">1000+</p>
              <p className="text-foreground-muted text-sm mt-1">Clientes satisfeitas</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">11</p>
              <p className="text-foreground-muted text-sm mt-1">Tipos de tratamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
