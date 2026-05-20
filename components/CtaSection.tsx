"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />

      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-[#080808]/90" />
        {/* Animated glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f5a623] rounded-full blur-[180px]"
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-[#f5a623]" />
            <span className="font-condensed text-[#f5a623] text-sm tracking-[0.3em] uppercase">
              Travaillons ensemble
            </span>
            <span className="w-12 h-px bg-[#f5a623]" />
          </div>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-6">
            VOTRE PROJET
            <br />
            <span className="text-[#f5a623]">MÉRITE LE MEILLEUR</span>
          </h2>

          <p className="text-[#9a9a9a] text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Vous recherchez un partenaire fiable pour vos projets électriques ? Shimi Company met
            son expertise et ses équipes à votre service pour chaque étape de votre chantier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="mailto:companyshimi@gmail.com?subject=Demande%20de%20devis%20-%20Shimi%20Company&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20le%20projet%20suivant%20%3A%0A%0A%5BD%C3%A9crivez%20votre%20projet%5D%0A%0ACordialement"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden px-10 py-5 bg-[#f5a623] text-black font-condensed font-600 tracking-widest uppercase text-sm rounded-sm flex items-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-3">
                Demande de devis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 bg-white translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </motion.a>

            <motion.a
              href="tel:+33744153891"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 border border-white/20 text-white font-condensed tracking-widest uppercase text-sm rounded-sm hover:border-[#f5a623]/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-4 h-4 text-[#f5a623]" />
              07 44 15 38 91
            </motion.a>
          </div>

          {/* Contact info row */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="mailto:companyshimi@gmail.com?subject=Demande%20de%20devis%20-%20Shimi%20Company"
              className="flex items-center gap-3 text-[#6b6b6b] hover:text-[#f5a623] transition-colors duration-200 group"
            >
              <Mail className="w-4 h-4 text-[#f5a623]/60 group-hover:text-[#f5a623] transition-colors duration-200" />
              <span className="font-condensed text-sm tracking-wide">companyshimi@gmail.com</span>
            </a>
            <span className="text-[#3a3a3a] hidden sm:block">|</span>
            <a
              href="tel:+33744153891"
              className="flex items-center gap-3 text-[#6b6b6b] hover:text-[#f5a623] transition-colors duration-200 group"
            >
              <Phone className="w-4 h-4 text-[#f5a623]/60 group-hover:text-[#f5a623] transition-colors duration-200" />
              <span className="font-condensed text-sm tracking-wide">07 44 15 38 91</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}