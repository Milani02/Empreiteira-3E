import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, waLink } from "../data";
import { WhatsAppIcon } from "./ui";
import Magnetic from "./Magnetic";
import { scrollToHash } from "../lib/smoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#inicio"
          onClick={(e) => go(e, "#inicio")}
          data-cursor="view"
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center bg-safety font-display text-lg text-ink">
            3E
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-head text-base font-extrabold tracking-tight text-white">
              EMPREITEIRA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-safety">
              Estrutura · Elétrica · Encanamento
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => go(e, link.href)}
              data-cursor="view"
              className="font-head text-sm font-medium text-white/80 transition-colors hover:text-safety"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Magnetic>
            <a
              href={waLink("Olá! Vim pelo site e quero um orçamento com a 3E Empreiteira.")}
              target="_blank"
              rel="noreferrer"
              data-cursor="view"
              className="inline-flex items-center gap-2 bg-safety px-5 py-2.5 font-head text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#fff]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Orçamento no WhatsApp
            </a>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="text-white lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-3">
              <span className="font-head text-base font-extrabold text-white">3E EMPREITEIRA</span>
              <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-white">
                <X className="h-7 w-7" />
              </button>
            </div>
            <motion.div
              initial="closed"
              animate="open"
              variants={{ open: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col gap-1 px-6 py-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  variants={{
                    closed: { opacity: 0, x: -16 },
                    open: { opacity: 1, x: 0 },
                  }}
                  className="border-b border-white/10 py-4 font-display text-2xl text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={waLink("Olá! Vim pelo site e quero um orçamento com a 3E Empreiteira.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-safety px-5 py-4 font-head text-base font-bold text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Orçamento no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
