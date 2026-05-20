"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 35, suffix: "+", label: "Ans d'expérience" },
  { value: 500, suffix: "+", label: "Projets livrés" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
  { value: 12, suffix: "k", label: "Logements électrifiés" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#f5a623] rounded-full blur-[150px] opacity-10"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#ff6b00] rounded-full blur-[180px] opacity-8"
        />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-8 lg:left-16 top-28 bottom-28 w-px bg-gradient-to-b from-transparent via-[#f5a623] to-transparent origin-top z-10"
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20"
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#f5a623]" />
          <span className="font-condensed text-[#f5a623] text-sm tracking-[0.3em] uppercase">
            Construction Électrique & BTP — 
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl sm:text-7xl lg:text-[100px] xl:text-[120px] leading-none text-white max-w-4xl"
          >
            UNE EXPERTISE
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl sm:text-7xl lg:text-[100px] xl:text-[120px] leading-none text-[#f5a623] max-w-4xl"
          >
            ÉLECTRIQUE
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl sm:text-7xl lg:text-[100px] xl:text-[120px] leading-none text-white max-w-5xl"
          >
            AU SERVICE DES GRANDS PROJETS
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-[#9a9a9a] text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed font-light"
        >
          Shimi Company accompagne les grands projets résidentiels et tertiaires avec plus de{" "}
          <span className="text-white font-medium">35 ans d'expérience terrain</span>, de la
          conception électrique à la livraison finale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#references"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#f5a623] text-black font-condensed font-600 tracking-widest uppercase text-sm rounded-sm hover:bg-white transition-colors duration-300"
          >
            Voir nos réalisations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="tel:+33744153891"
            className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-condensed tracking-widest uppercase text-sm rounded-sm hover:border-[#f5a623]/50 hover:bg-white/5 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            07 44 15 38 91
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f]/80 backdrop-blur-sm px-6 py-5 hover:bg-[#161616]/80 transition-colors duration-200"
            >
              <div className="font-display text-4xl text-[#f5a623] leading-none mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={1.5 + i * 0.1} />
              </div>
              <div className="font-condensed text-xs text-[#6b6b6b] tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-condensed text-[10px] tracking-[0.3em] text-[#6b6b6b] uppercase">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-[#f5a623]" />
        </motion.div>
      </motion.div>
    </section>
  );
}