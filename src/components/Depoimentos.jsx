import { motion } from "framer-motion";
import { TESTIMONIALS, CASE_DESTAQUE } from "../data";
import { Eyebrow } from "./ui";
import SplitText from "./SplitText";
import InfiniteMovingCards from "./InfiniteMovingCards";
import CompareSlider from "./CompareSlider";

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
          <SplitText as="h2" className="mt-4 font-display text-4xl leading-[1.02] text-ink sm:text-5xl">
            RESULTADO É O QUE FALA POR NÓS
          </SplitText>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-14"
      >
        <InfiniteMovingCards items={TESTIMONIALS} />
      </motion.div>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-t border-ink/10 pt-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-ink/40">
              {CASE_DESTAQUE.eyebrow}
            </span>
            <h3 className="mt-3 font-display text-3xl leading-[1.05] text-ink sm:text-4xl">
              {CASE_DESTAQUE.title}
            </h3>
            <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink/65">
              {CASE_DESTAQUE.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CompareSlider
              before={CASE_DESTAQUE.before}
              after={CASE_DESTAQUE.after}
              beforeLabel={CASE_DESTAQUE.beforeLabel}
              afterLabel={CASE_DESTAQUE.afterLabel}
              className="border-2 border-ink shadow-[10px_10px_0_0_#0A0A0A]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
