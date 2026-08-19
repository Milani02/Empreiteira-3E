import { motion } from "framer-motion";
import { PROCESSO, waLink } from "../data";
import { Eyebrow, WhatsAppIcon } from "./ui";
import SplitText from "./SplitText";
import TracingBeam from "./TracingBeam";
import Magnetic from "./Magnetic";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow dark>{PROCESSO.eyebrow}</Eyebrow>
          <SplitText
            as="h2"
            className="mt-4 font-display text-4xl leading-[1.02] text-white sm:text-5xl"
          >
            {PROCESSO.title}
          </SplitText>
        </motion.div>

        <div className="mt-16">
          <TracingBeam>
            {PROCESSO.steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              >
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-safety">
                  {step.n}
                </span>
                <h3 className="mt-1.5 font-head text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-white/55">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </TracingBeam>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-sm font-body text-sm text-white/60">
            Sem letra miúda, sem passo escondido. É isso — do zap ao último parafuso.
          </p>
          <Magnetic>
            <a
              href={waLink("Olá! Quero começar pelo passo 1: falar com a 3M sobre minha obra.")}
              target="_blank"
              rel="noreferrer"
              data-cursor="view"
              className="inline-flex items-center justify-center gap-2 bg-safety px-7 py-4 font-head text-base font-bold text-ink transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#fff]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Começar pelo passo 1
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
