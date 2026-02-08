import Image from "next/image";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511940301423&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-background-white/30 to-beige" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-lighter/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-lighter/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
              Clínica de Estética e Bem-Estar
            </p>

            <h1 className="font-display text-5xl md:text-7xl leading-tight text-foreground mb-8">
              Realce a sua{" "}
              <span className="text-gold italic">beleza natural</span>
            </h1>

            <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Tratamentos estéticos personalizados com ciência, técnica e
              cuidado. Sua jornada de autocuidado começa aqui.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Agende sua Avaliação
              </a>
              <a
                href="#servicos"
                className="border border-foreground/20 text-foreground px-8 py-4 rounded-full text-lg hover:border-gold hover:text-gold transition-all duration-300"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-display text-3xl md:text-4xl text-gold">
                  10+
                </p>
                <p className="text-foreground-muted text-sm mt-1">
                  Anos de experiência
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-gold">
                  1000+
                </p>
                <p className="text-foreground-muted text-sm mt-1">
                  Clientes satisfeitas
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-gold">
                  11
                </p>
                <p className="text-foreground-muted text-sm mt-1">
                  Tipos de tratamento
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-gold/10">
              <Image
                src="/images/sonia-cerejeira.jpeg"
                alt="Maria Sonia - Esteticista e Biomédica"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold/20 rounded-3xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-lighter/50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
