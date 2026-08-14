import { motion } from "framer-motion";

/**
 * Curtain-wipe reveal: a solid panel covers the image and slides away
 * on scroll-into-view, uncovering the photo underneath.
 */
export default function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  panelColor = "bg-safety",
  delay = 0,
  grayscale = false,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full w-full object-cover ${grayscale ? "grayscale" : ""} ${imgClassName}`}
      />
      <motion.div
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay, ease: [0.83, 0, 0.17, 1] }}
        style={{ transformOrigin: "right" }}
        className={`absolute inset-0 ${panelColor}`}
      />
    </div>
  );
}
