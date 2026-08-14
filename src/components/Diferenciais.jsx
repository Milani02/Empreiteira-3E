import { motion } from "framer-motion";
import { DIFFERENTIALS } from "../data";
import { Eyebrow, HazardStripe } from "./ui";

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative bg-ink py-24 sm:py-32">
      <HazardStripe className="absolute inset-x-0 top-0 h-2.5" />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Eyebrow dark>Por que escolher a 3E</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-white sm:text-5xl">
            CONFIANÇA NÃO É PROMESSA, É PROCESSO
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {DIFFERENTIALS.map((d) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  whileHover={{ borderColor: "#FFC800", rotate: 3 }}
                  className="flex h-14 w-14 items-center justify-center border-2 border-safety/60"
                >
                  <Icon className="h-6 w-6 text-safety" strokeWidth={1.75} />
                </motion.div>
                <h3 className="mt-5 font-head text-lg font-bold text-white">{d.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/55">{d.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
