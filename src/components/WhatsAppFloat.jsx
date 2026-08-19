import { motion } from "framer-motion";
import { waLink } from "../data";
import { WhatsAppIcon } from "./ui";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("Olá! Vim pelo site e quero um orçamento com a 3M Empreiteira.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar a 3M Empreiteira no WhatsApp"
      data-cursor="view"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-safety text-ink shadow-[4px_4px_0_0_#0A0A0A]"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-safety/50 animate-pulseRing" />
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  );
}
