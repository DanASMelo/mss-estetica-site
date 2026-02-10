import Image from "next/image";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511940301423&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/sonia-profissional.jpeg"
                alt="Maria Sonia - Esteticista e Biomédica na Mss Estética"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-accent/10 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Text content */}
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-4">
              Sobre a Profissional
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase mb-3 leading-tight">
              Maria Sonia
            </h2>
            <p className="text-accent font-semibold text-lg mb-8">
              Esteticista &amp; Biomédica
            </p>
            <div className="space-y-5 text-foreground-muted leading-relaxed">
              <p>
                Esteticista e biomédica, há 10 anos na área da beleza, unindo
                ciência, técnica e cuidado.
              </p>
              <p>
                Acredito que cada pele conta uma história — e estou aqui para
                valorizar a sua.
              </p>
              <p>
                Trabalho com responsabilidade, ética e muito amor pelo que faço.
              </p>
              <p>
                Aqui, você encontra acolhimento, profissionalismo e resultados
                reais. Seja bem-vinda ao nosso universo de autocuidado!
              </p>
              <p className="font-display text-foreground text-lg font-bold uppercase">
                Vamos juntas realçar o que você tem de mais bonito?
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Agende sua Avaliação
            </a>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-accent pl-4">
                <p className="font-display text-2xl font-bold text-primary uppercase">10+</p>
                <p className="text-foreground-muted text-sm">
                  Anos de Experiência
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-display text-2xl font-bold text-primary uppercase">
                  Biomédica
                </p>
                <p className="text-foreground-muted text-sm">
                  Ciência e técnica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
