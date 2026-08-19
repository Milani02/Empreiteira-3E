import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TICKER_ITEMS } from "./data";
import { initSmoothScroll, destroySmoothScroll } from "./lib/smoothScroll";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import NoiseOverlay from "./components/NoiseOverlay";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Historia from "./components/Historia";
import Diferenciais from "./components/Diferenciais";
import Depoimentos from "./components/Depoimentos";
import ComoFunciona from "./components/ComoFunciona";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = initSmoothScroll();
    if (loading) lenis?.stop();
    return () => destroySmoothScroll();
  }, []);

  const handlePreloaderDone = () => {
    setLoading(false);
    initSmoothScroll()?.start();
  };

  return (
    <div className="min-h-screen bg-paper">
      <AnimatePresence>
        {loading && <Preloader onDone={handlePreloaderDone} />}
      </AnimatePresence>

      <Cursor />
      <ScrollProgress />
      <NoiseOverlay />
      <Navbar />

      <main>
        <Hero />
        <Marquee items={TICKER_ITEMS} />
        <Sobre />
        <Servicos />
        <Historia />
        <Diferenciais />
        <Depoimentos />
        <ComoFunciona />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
