import Image from "next/image";

const clinicPhotos = [
  {
    src: "/images/clinica-panoramica1.jpeg",
    alt: "Sala de tratamento - visão geral",
    label: "Sala de Tratamento",
  },
  {
    src: "/images/clinica-panoramica2.jpeg",
    alt: "Sala de tratamento - ambiente completo",
    label: "Ambiente Completo",
  },
  {
    src: "/images/clinica-sala1.jpeg",
    alt: "Maca e equipamentos de tratamento",
    label: "Equipamentos Modernos",
  },
  {
    src: "/images/clinica-sala2.jpeg",
    alt: "Sala de tratamento com produtos profissionais",
    label: "Produtos Profissionais",
  },
];

const treatmentPhoto = {
  src: "/images/tratamento-massagem.jpeg",
  alt: "Tratamento de massagem em andamento",
  label: "Massagem Profissional",
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-background-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Galeria
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase mb-6">
            Conheça nosso Espaço
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Um ambiente acolhedor, moderno e preparado para oferecer o melhor em
            cuidados estéticos.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large featured image */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 group relative rounded-2xl overflow-hidden">
            <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative">
              <Image
                src={treatmentPhoto.src}
                alt={treatmentPhoto.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-display text-lg font-bold uppercase">
                  {treatmentPhoto.label}
                </p>
              </div>
            </div>
          </div>

          {/* Clinic photos */}
          {clinicPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display text-sm font-bold uppercase">
                    {photo.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
