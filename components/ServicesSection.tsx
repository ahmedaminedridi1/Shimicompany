"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Cable,
  Network,
  ToggleLeft,
  TableProperties,
  LayoutGrid,
  ClipboardCheck,
  Settings2,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "CFO / CFA",
    abbr: "01",
    desc: "Courants forts et faibles, nous concevons et installons l'ensemble des réseaux électriques de vos bâtiments.",
  },
  {
    icon: Network,
    title: "Colonnes ENEDIS",
    abbr: "02",
    desc: "Colonnes montantes, comptages collectifs, branchements ENEDIS conformes aux prescriptions techniques.",
  },
  {
    icon: Cable,
    title: "Chemins de câbles",
    abbr: "03",
    desc: "Conception et pose de chemins de câbles, goulottes, conduits — adaptation à tout type de structure.",
  },
  {
    icon: ToggleLeft,
    title: "Appareillages",
    abbr: "04",
    desc: "Pose d'appareillages, prises, interrupteurs, domotique — finitions soignées pour le résidentiel premium.",
  },
  {
    icon: TableProperties,
    title: "Tableaux électriques",
    abbr: "05",
    desc: "TGBT, tableaux divisionnaires, armoires de comptage — câblage industriel et tertiaire haute performance.",
  },
  {
    icon: LayoutGrid,
    title: "Placo & second œuvre",
    abbr: "06",
    desc: "Travaux de plâtrerie légère, cloisonnement, intégration des réseaux encastrés dans les parois.",
  },
  {
    icon: ClipboardCheck,
    title: "Levée des réserves",
    abbr: "07",
    desc: "Intervention rapide et efficace sur les réserves de réception — notre expertise réduit les délais au minimum.",
  },
  {
    icon: Settings2,
    title: "Gestion chantier",
    abbr: "08",
    desc: "Pilotage intégral de votre chantier électrique : coordination des équipes, planification, reporting.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-25" />

      {/* Big background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[20vw] text-white/[0.015] whitespace-nowrap">
          SERVICES
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#f5a623]" />
            <span className="font-condensed text-[#f5a623] text-sm tracking-[0.3em] uppercase">
              Notre savoir-faire
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display text-5xl lg:text-7xl text-white leading-none">
              NOS DOMAINES
              <br />
              <span className="text-[#f5a623]">D'INTERVENTION</span>
            </h2>
            <p className="text-[#6b6b6b] max-w-sm text-sm leading-relaxed font-light">
              De la conception à la réception, Shimi Company maîtrise chaque corps de métier lié à
              l'installation électrique en bâtiment.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors duration-300 overflow-hidden cursor-default"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-display text-6xl text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-300 leading-none select-none">
                  {svc.abbr}
                </span>

                {/* Icon */}
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#f5a623]/20 bg-[#f5a623]/5 rounded-sm mb-6 group-hover:border-[#f5a623]/50 group-hover:bg-[#f5a623]/10 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#f5a623]" />
                </div>

                <h3 className="font-condensed text-white text-lg tracking-wide uppercase mb-3 group-hover:text-[#f5a623] transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed font-light">{svc.desc}</p>

                {/* Bottom accent */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f5a623] group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}