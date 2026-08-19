import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { IMG, STATS, waLink } from "../data";
import { Eyebrow, HazardStripe, WhatsAppIcon } from "./ui";
import Magnetic from "./Magnetic";
import Counter from "./Counter";
import { scrollToHash } from "../lib/smoothScroll";

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 160]);
  const gridY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headline = ["CONSTRUÍMOS.", "CONSERTAMOS.", "CUMPRIMOS O PRAZO."];

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pt-28"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0 -top-10">
        <img
          src={IMG.hero}
          alt="Equipe da 3M Empreiteira em canteiro de obra"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
      </motion.div>
      <motion.div style={{ y: gridY }} className="blueprint-grid absolute inset-0 opacity-40" />

      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow dark>Marido de aluguel & construção civil</Eyebrow>
          </motion.div>

          <h1 className="mt-5 font-display text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.92] text-white">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${i === 2 ? "text-safety" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-7 max-w-xl font-body text-base text-white/75 sm:text-lg"
          >
            Da fundação ao acabamento, da tomada que não liga ao cano que estourou — a 3M coloca
            uma equipe própria na sua obra, com orçamento fechado em até 48h e prazo em contrato.
            Sem terceirizado, sem sumiço, sem "depois eu volto".
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <a
                href={waLink("Olá! Vim pelo site e quero um orçamento com a 3M Empreiteira.")}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                className="inline-flex items-center justify-center gap-2 bg-safety px-7 py-4 font-head text-base font-bold text-ink transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#fff]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp agora
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash("#servicos");
                }}
                data-cursor="view"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-7 py-4 font-head text-base font-bold text-white transition-colors hover:border-safety hover:text-safety"
              >
                Ver serviços
                <ArrowRight className="h-4 w-4" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl text-safety sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-2 text-white/40 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest [writing-mode:vertical-rl]">
          Role para ver mais
        </span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      <HazardStripe className="absolute inset-x-0 bottom-0 h-2.5" />
    </section>
  );
}
