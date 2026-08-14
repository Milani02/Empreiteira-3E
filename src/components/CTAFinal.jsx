import { motion } from "framer-motion";
import { IMG, waLink } from "../data";
import { Eyebrow, HazardStripe, WhatsAppIcon } from "./ui";
import Magnetic from "./Magnetic";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <HazardStripe className="absolute inset-x-0 top-0 h-2.5" />
      <motion.img
        src={IMG.ctaFinal}
        alt="Casa reformada com acabamento moderno"
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.25 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/95 to-ink/70" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow dark>Pronto pra resolver?</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[11vw] leading-[0.95] text-white sm:text-6xl">
            SUA OBRA COMEÇA COM UMA MENSAGEM
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-body text-base text-white/70">
            Fale agora com a 3E Empreiteira e receba um orçamento detalhado, sem compromisso, em
            até 48h.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Magnetic strength={0.3}>
              <a
                href={waLink("Olá! Vim pelo site e quero um orçamento com a 3E Empreiteira.")}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                className="relative inline-flex items-center gap-2.5 bg-safety px-9 py-5 font-head text-lg font-bold text-ink transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#fff]"
              >
                <span className="absolute inset-0 -z-10 rounded-full bg-safety/40 animate-pulseRing" />
                <WhatsAppIcon className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </Magnetic>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              Atendimento humano · sem robô · sem enrolação
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
