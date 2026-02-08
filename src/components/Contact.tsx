const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511940301423&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-background-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Contato
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Agende seu horário ou tire suas
            dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address card */}
          <div className="bg-beige/50 border border-beige-dark/50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-lighter flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">
              Endereço
            </h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              R. Silva Bueno, 1504
              <br />
              Ipiranga, 04208-000
              <br />
              São Paulo - SP
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Silva+Bueno+1504+Ipiranga+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gold text-sm mt-3 hover:text-gold-light transition-colors"
            >
              Ver no mapa →
            </a>
          </div>

          {/* Phone card */}
          <div className="bg-beige/50 border border-beige-dark/50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-lighter flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">
              Telefone
            </h3>
            <p className="text-foreground-muted text-sm">
              (11) 94030-1423
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gold text-sm mt-3 hover:text-gold-light transition-colors"
            >
              Chamar no WhatsApp →
            </a>
          </div>

          {/* Hours card */}
          <div className="bg-beige/50 border border-beige-dark/50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-lighter flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">
              Horário
            </h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Seg a Sex: 9h às 17h
              <br />
              Sábado: 9h às 12h
              <br />
              Domingo: Fechado
            </p>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-beige-dark/50 h-80">
          <iframe
            src="https://maps.google.com/maps?q=R.+Silva+Bueno,+1504+-+Ipiranga,+S%C3%A3o+Paulo+-+SP,+04208-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Mss Estética - R. Silva Bueno, 1504, Ipiranga"
          />
        </div>
      </div>
    </section>
  );
}
