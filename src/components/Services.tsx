const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511940301423&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20tratamentos";

const services = [
  {
    name: "Massagem Modeladora",
    description:
      "Técnica que reduz medidas e modela o corpo através de movimentos firmes e profundos.",
  },
  {
    name: "Massagem Relaxante",
    description:
      "Alívio do estresse e tensões musculares com movimentos suaves e envolventes.",
  },
  {
    name: "Drenagem Linfática",
    description:
      "Estimula o sistema linfático, reduz inchaço e elimina toxinas do organismo.",
  },
  {
    name: "Limpeza de Pele",
    description:
      "Tratamento facial profundo que remove impurezas e renova a pele.",
  },
  {
    name: "Lipocavitação",
    description:
      "Ultrassom de baixa frequência que quebra células de gordura localizada.",
  },
  {
    name: "Ultrassom",
    description:
      "Ondas ultrassônicas que auxiliam na penetração de ativos e tratamento de gordura.",
  },
  {
    name: "Radiofrequência",
    description:
      "Estimula a produção de colágeno, combatendo flacidez e rejuvenescendo a pele.",
  },
  {
    name: "Depilação Virilha",
    description: "Depilação com cera de alta qualidade para a região da virilha.",
  },
  {
    name: "Depilação Pernas",
    description: "Depilação completa das pernas com cera, pele lisa e macia.",
  },
  {
    name: "Depilação Axila",
    description: "Depilação com cera na região das axilas com cuidado e conforto.",
  },
  {
    name: "Depilação Buço",
    description: "Depilação delicada do buço com cera, resultado impecável.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase mb-6">
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
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-accent border border-transparent transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-accent text-lg">✦</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground uppercase mb-3 group-hover:text-accent transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Saiba mais →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
