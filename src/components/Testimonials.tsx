const testimonials = [
  {
    name: "Camila R.",
    text: "Experiência incrível! A massagem modeladora trouxe resultados visíveis já nas primeiras sessões. Ambiente lindo e atendimento impecável.",
    rating: 5,
  },
  {
    name: "Juliana M.",
    text: "A drenagem linfática é maravilhosa. Me sinto muito mais leve e desinchada. Super recomendo a Mss Estética!",
    rating: 5,
  },
  {
    name: "Fernanda S.",
    text: "Fiz limpeza de pele e radiofrequência. Minha pele nunca esteve tão bonita! Profissionais super atenciosas.",
    rating: 5,
  },
  {
    name: "Ana Paula L.",
    text: "Adoro o atendimento da clínica. Sempre saio renovada. A depilação com cera é excelente, sem irritação nenhuma.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            O que nossas clientes dizem
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            A satisfação das nossas clientes é o nosso maior orgulho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background-white/60 backdrop-blur-sm border border-beige-dark/50 rounded-2xl p-8"
            >
              <Stars count={testimonial.rating} />
              <p className="text-foreground-muted leading-relaxed mt-4 mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-lighter flex items-center justify-center">
                  <span className="text-gold font-display text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <p className="text-foreground font-medium text-sm">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
