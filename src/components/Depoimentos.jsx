import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Eyebrow } from "./ui";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Eyebrow>Quem já contratou</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-ink sm:text-5xl">
            RESULTADO É O QUE FALA POR NÓS
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6, rotate: -0.5 }}
              className="flex flex-col border border-ink/10 bg-white p-7 transition-shadow hover:shadow-[8px_8px_0_0_#0A0A0A]"
            >
              <div className="flex gap-1 text-safety-dim">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-body text-[15px] leading-relaxed text-ink/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-head text-sm font-bold text-ink">{t.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-ink/45">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
