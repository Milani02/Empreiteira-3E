import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { SERVICES } from "../data";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 text-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-safety font-display text-lg text-ink">
                3E
              </span>
              <span className="font-head text-base font-extrabold text-white">EMPREITEIRA</span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed">
              Construção civil e marido de aluguel com equipe própria, orçamento fechado e prazo
              que a gente cumpre.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram da 3E Empreiteira"
                data-cursor="view"
                className="flex h-9 w-9 items-center justify-center border border-white/15 transition-colors hover:border-safety hover:text-safety"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook da 3E Empreiteira"
                data-cursor="view"
                className="flex h-9 w-9 items-center justify-center border border-white/15 transition-colors hover:border-safety hover:text-safety"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-sm">
              {SERVICES.map((s) => (
                <li key={s.code}>
                  <a href="#servicos" className="transition-colors hover:text-safety">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 font-body text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety" />
                (11) 98888-4433
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety" />
                contato@3eempreiteira.com.br
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety" />
                Av. das Nações, 1500 — São Paulo/SP
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
              Atendimento
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-sm">
              <li>Seg. a Sex. — 8h às 18h</li>
              <li>Sáb. — 8h às 13h</li>
              <li>Orçamento pelo WhatsApp, 24h</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 font-mono text-[11px] uppercase tracking-wide sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 3E Empreiteira. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00 (fictício)</span>
        </div>
      </div>
    </footer>
  );
}
