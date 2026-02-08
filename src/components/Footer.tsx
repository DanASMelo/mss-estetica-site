export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-white mb-4">
              Mss <span className="text-gold">Estética</span>
            </p>
            <p className="text-sm leading-relaxed">
              Clínica de estética e bem-estar. Realce a sua beleza natural com
              nossos tratamentos especializados.
            </p>
            <p className="text-sm mt-3 text-white/50">
              R. Silva Bueno, 1504 - Ipiranga
              <br />
              São Paulo - SP, 04208-000
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social & contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mssestetica/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-sm mt-6">(11) 94030-1423</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Mss Estética. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
