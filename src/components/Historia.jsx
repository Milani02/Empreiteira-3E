import { motion } from "framer-motion";
import { HISTORIA, IMG } from "../data";
import { Eyebrow, HazardStripe } from "./ui";
import SplitText from "./SplitText";
import Timeline from "./Timeline";
import ImageReveal from "./ImageReveal";

export default function Historia() {
  return (
    <section id="historia" className="relative bg-ink py-24 sm:py-32">
      <HazardStripe className="absolute inset-x-0 top-0 h-2.5" />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow dark>{HISTORIA.eyebrow}</Eyebrow>
              <SplitText
                as="h2"
                className="mt-4 font-display text-4xl leading-[1.02] text-white sm:text-5xl"
              >
                {HISTORIA.title}
              </SplitText>
              <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/60">
                {HISTORIA.intro}
              </p>
            </motion.div>

            <div className="mt-14">
              <Timeline items={HISTORIA.milestones} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <ImageReveal
              src={IMG.historia}
              alt="Planejamento técnico de obra, ponto de partida da 3M Empreiteira"
              className="aspect-[4/5] border-2 border-white/10"
              panelColor="bg-ink"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
