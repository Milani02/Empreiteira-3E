import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, waLink } from "../data";
import { Eyebrow } from "./ui";
import ImageReveal from "./ImageReveal";

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(useTransform(rx, [-0.5, 0.5], [7, -7]), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(ry, [-0.5, 0.5], [-7, 7]), {
    damping: 20,
    stiffness: 200,
  });

  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
  };
  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        data-cursor="view"
        data-cursor-text="Ver"
        className="group relative flex flex-col overflow-hidden border border-ink/10 bg-white"
      >
        <div className="relative h-52 overflow-hidden">
          <ImageReveal
            src={service.img}
            alt={service.title}
            className="h-full"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
            delay={index * 0.06}
          />
          <div className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/50" />
          <span className="absolute left-4 top-4 bg-safety px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-ink">
            {service.code}
          </span>
          <Icon className="absolute bottom-4 right-4 h-9 w-9 text-white/90" strokeWidth={1.5} />
        </div>

        <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(30px)" }}>
          <h3 className="font-head text-xl font-extrabold text-ink">{service.title}</h3>
          <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink/60">
            {service.desc}
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-1.5 border-t border-ink/10 pt-4">
            {service.items.map((item) => (
              <li key={item} className="flex items-center gap-2 font-mono text-[11px] text-ink/50">
                <span className="h-1 w-1 flex-shrink-0 bg-safety-dim" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={waLink(`Olá! Quero um orçamento de ${service.title.toLowerCase()} com a 3E.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 font-head text-sm font-bold text-ink transition-colors group-hover:text-safety-dim"
          >
            Solicitar orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Eyebrow>Nossos serviços</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-ink sm:text-5xl">
            UM ÚNICO NÚMERO PRA TODA A CASA
          </h2>
          <p className="mt-5 font-body text-base text-ink/60">
            Estrutura, elétrica, hidráulica e manutenção — tudo com a mesma equipe, o mesmo
            padrão de qualidade e o mesmo compromisso com o prazo.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.code} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
