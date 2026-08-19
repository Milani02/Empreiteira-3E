import { motion } from "framer-motion";
import { DIFFERENTIALS } from "../data";
import { Eyebrow, HazardStripe } from "./ui";
import SplitText from "./SplitText";
import GlowCard from "./GlowCard";
import { BentoGrid, BentoCell } from "./BentoGrid";

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
          <Eyebrow dark>Por que escolher a 3M</Eyebrow>
          <SplitText
            as="h2"
            className="mt-4 font-display text-4xl leading-[1.02] text-white sm:text-5xl"
          >
            CONFIANÇA NÃO É PROMESSA, É PROCESSO
          </SplitText>
        </motion.div>

        <BentoGrid className="mt-14 lg:grid-cols-4">
          {DIFFERENTIALS.map((d, i) => {
            const Icon = d.icon;
            return (
              <BentoCell key={d.title} span={d.big ? 2 : 1}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="h-full"
                >
                  <GlowCard
                    spotlightColor="255,200,0"
                    className={`h-full border border-white/10 bg-white/[0.02] p-7 ${d.big ? "sm:flex sm:flex-col sm:justify-center sm:p-9" : ""}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center border-2 border-safety/60 transition-colors group-hover:border-safety">
                      <Icon className="h-6 w-6 text-safety" strokeWidth={1.75} />
                    </div>
                    <h3 className={`mt-5 font-head font-bold text-white ${d.big ? "text-2xl" : "text-lg"}`}>
                      {d.title}
                    </h3>
                    <p className={`mt-2 font-body leading-relaxed text-white/55 ${d.big ? "max-w-sm text-base" : "text-sm"}`}>
                      {d.desc}
                    </p>
                  </GlowCard>
                </motion.div>
              </BentoCell>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
