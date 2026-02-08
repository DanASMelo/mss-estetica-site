const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511940301423&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20tratamentos";

const services = [
  {
    name: "Massagem Modeladora",
    description:
      "Técnica que reduz medidas e modela o corpo através de movimentos firmes e profundos.",
    icon: "✦",
  },
  {
    name: "Massagem Relaxante",
    description:
      "Alívio do estresse e tensões musculares com movimentos suaves e envolventes.",
    icon: "✦",
  },
  {
    name: "Drenagem Linfática",
    description:
      "Estimula o sistema linfático, reduz inchaço e elimina toxinas do organismo.",
    icon: "✦",
  },
  {
    name: "Limpeza de Pele",
    description:
      "Tratamento facial profundo que remove impurezas e renova a pele.",
    icon: "✦",
  },
  {
    name: "Lipocavitação",
    description:
      "Ultrassom de baixa frequência que quebra células de gordura localizada.",
    icon: "✦",
  },
  {
    name: "Ultrassom",
    description:
      "Ondas ultrassônicas que auxiliam na penetração de ativos e tratamento de gordura.",
    icon: "✦",
  },
  {
    name: "Radiofrequência",
    description:
      "Estimula a produção de colágeno, combatendo flacidez e rejuvenescendo a pele.",
    icon: "✦",
  },
  {
    name: "Depilação Virilha",
    description: "Depilação com cera de alta qualidade para a região da virilha.",
    icon: "✦",
  },
  {
    name: "Depilação Pernas",
    description: "Depilação completa das pernas com cera, pele lisa e macia.",
    icon: "✦",
  },
  {
    name: "Depilação Axila",
    description: "Depilação com cera na região das axilas com cuidado e conforto.",
    icon: "✦",
  },
  {
    name: "Depilação Buço",
    description: "Depilação delicada do buço com cera, resultado impecável.",
    icon: "✦",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Tratamentos Especializados
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Oferecemos uma variedade completa de tratamentos estéticos para
            cuidar da sua beleza e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.name}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background-white/60 backdrop-blur-sm border border-beige-dark/50 rounded-2xl p-8 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <span className="text-gold text-2xl">{service.icon}</span>
              <h3 className="font-display text-xl text-foreground mt-4 mb-3 group-hover:text-gold transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
