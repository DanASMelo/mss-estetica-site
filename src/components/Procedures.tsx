"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Drenagem Linfática",
    videos: [
      { src: "/videos/drenagem/drenagem-01.mp4", title: "Drenagem Linfática" },
      { src: "/videos/drenagem/drenagem-02.mp4", title: "Drenagem Linfática" },
      { src: "/videos/drenagem/drenagem-03.mp4", title: "Drenagem Linfática" },
      { src: "/videos/drenagem/drenagem-04.mp4", title: "Drenagem Linfática" },
      { src: "/videos/drenagem/drenagem-05.mp4", title: "Drenagem Linfática" },
      { src: "/videos/drenagem/drenagem-06.mp4", title: "Drenagem Linfática" },
      { src: "/videos/drenagem/drenagem-pos-operatorio.mp4", title: "Pós-Operatório" },
    ],
  },
  {
    label: "Limpeza de Pele",
    videos: [
      { src: "/videos/limpeza-de-pele/limpeza-01.mp4", title: "Limpeza de Pele" },
      { src: "/videos/limpeza-de-pele/limpeza-02.mp4", title: "Limpeza de Pele" },
      { src: "/videos/limpeza-de-pele/limpeza-03.mp4", title: "Limpeza de Pele" },
    ],
  },
  {
    label: "Massagem Relaxante",
    videos: [
      { src: "/videos/massagem-relaxante/massagem-01.mp4", title: "Massagem Relaxante" },
      { src: "/videos/massagem-relaxante/massagem-02.mp4", title: "Massagem Relaxante" },
      { src: "/videos/massagem-relaxante/massagem-03.mp4", title: "Massagem Relaxante" },
      { src: "/videos/massagem-relaxante/massagem-04.mp4", title: "Massagem Relaxante" },
      { src: "/videos/massagem-relaxante/massagem-05.mp4", title: "Massagem Relaxante" },
    ],
  },
];

export default function Procedures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="procedimentos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Procedimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase mb-6">
            Veja na Prática
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Acompanhe nossos tratamentos sendo realizados com profissionalismo e cuidado.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`font-display text-sm md:text-base font-bold uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                i === activeTab
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-background-alt text-foreground-muted hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabs[activeTab].videos.map((video) => (
            <div key={video.src} className="rounded-2xl overflow-hidden bg-background-alt shadow-sm">
              <video
                src={video.src}
                controls
                preload="metadata"
                className="w-full aspect-[9/16] object-cover bg-black"
              >
                Seu navegador não suporta vídeos.
              </video>
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-foreground">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
