import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { IMG } from "../data";
import { Eyebrow, StampBadge } from "./ui";
import ImageReveal from "./ImageReveal";

const PAINS = [
  "Pedreiro que some no meio da obra",
  "Orçamento que triplica depois que a parede já foi quebrada",
  "Eletricista que promete terça e aparece só depois de 3 ligações",
  "Reforma de 2 semanas que virou 2 meses de pó e barulho",
];

const SOLUTIONS = [
  "Equipe própria, supervisionada do início ao fim",
  "Orçamento fechado antes do primeiro martelada",
  "Cronograma em contrato, com data pra terminar",
  "Um responsável técnico que atende o telefone",
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>O problema</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-ink sm:text-5xl">
            VOCÊ JÁ CONTRATOU ALGUÉM QUE SUMIU NO MEIO DA OBRA?
          </h2>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink/70">
            A 3E Empreiteira nasceu pra acabar com isso. Não terceirizamos o seu problema pra
            quem a gente não vai poder cobrar depois — cada etapa passa pela nossa própria
            equipe, do primeiro tijolo ao último parafuso.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-ink/40">
                Sem a 3E
              </span>
              <ul className="mt-4 space-y-3">
                {PAINS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink/60">
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink/30" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-safety-dim">
                Com a 3E
              </span>
              <ul className="mt-4 space-y-3">
                {SOLUTIONS.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety-dim" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <ImageReveal
            src={IMG.sobre}
            alt="Planejamento técnico de obra com ferramentas sobre a mesa"
            className="aspect-[4/5] border-2 border-ink shadow-[10px_10px_0_0_#0A0A0A]"
            grayscale
          />
          <StampBadge
            label="Orçamento grátis"
            sub="Sem compromisso"
            className="absolute -bottom-8 -left-6 h-32 w-32 rotate-[-8deg] animate-stampIn sm:-left-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
