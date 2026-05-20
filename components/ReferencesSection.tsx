"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, Zap, ArrowUpRight } from "lucide-react";

const references = [
  {
    project: "Prison de la Santé",
    location: "Paris 5ème",
    client: "Ministère de la Justice",
    category: "Établissement pénitentiaire",
    scope: "Installation CFO/CFA complète",
    stats: { value: "1 200", unit: "cellules" },
    tag: "Sécurité maximale",
    accent: "#f5a623",
  },
  {
    project: "Tour D2",
    location: "La Défense",
    client: "Bouygues Immobilier",
    category: "Tour de bureaux",
    scope: "Tableaux électriques TGBT, chemins de câbles",
    stats: { value: "160m", unit: "de hauteur" },
    tag: "Grande hauteur",
    accent: "#ff9500",
  },
  {
    project: "Programme Résidentiel",
    location: "Île-de-France",
    client: "Kaufman & Broad",
    category: "Résidences premium",
    scope: "Colonnes ENEDIS, CFO/CFA logements",
    stats: { value: "2 400+", unit: "logements" },
    tag: "Résidentiel premium",
    accent: "#f5a623",
  },
  {
    project: "Résidences Nexity",
    location: "Région parisienne",
    client: "Nexity",
    category: "Immobilier résidentiel",
    scope: "Électricité complète, appareillages",
    stats: { value: "3 100+", unit: "unités" },
    tag: "Grand promoteur",
    accent: "#ff9500",
  },
  {
    project: "Hôtels La Défense",
    location: "La Défense",
    client: "Groupes hôteliers",
    category: "Hôtellerie d'affaires",
    scope: "CFA, automatismes, tableaux de bord",
    stats: { value: "800+", unit: "chambres" },
    tag: "Hôtellerie 4★",
    accent: "#f5a623",
  },
];

export default function ReferencesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="references" ref={ref} className="relative py-28 overflow-hidden bg-[#060606]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#f5a623]" />
              <span className="font-condensed text-[#f5a623] text-sm tracking-[0.3em] uppercase">
                Références majeures
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-white leading-none">
              DES PROJETS
              <br />
              <span className="text-[#f5a623]">D'ENVERGURE</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#6b6b6b] max-w-sm leading-relaxed text-sm font-light"
          >
            Shimi Company intervient sur des projets à haute valeur technique, en partenariat avec
            les plus grands acteurs de la construction française.
          </motion.p>
        </div>

        {/* References grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
          {/* Large first card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 group relative bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors duration-300 overflow-hidden cursor-pointer"
          >
            <ReferenceCard ref={references[0]} large />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors duration-300 overflow-hidden cursor-pointer"
          >
            <ReferenceCard ref={references[1]} />
          </motion.div>

          {references.slice(2).map((ref_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.08 }}
              className="group relative bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors duration-300 overflow-hidden cursor-pointer"
            >
              <ReferenceCard ref={ref_} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferenceCard({
  ref: r,
  large = false,
}: {
  ref: (typeof references)[0];
  large?: boolean;
}) {
  return (
    <div className="h-full flex flex-col">
      {/* Top tag */}
      <div className="flex items-center justify-between mb-8">
        <span
          className="font-condensed text-xs tracking-[0.25em] uppercase px-3 py-1 rounded-sm"
          style={{ color: r.accent, backgroundColor: `${r.accent}15`, border: `1px solid ${r.accent}25` }}
        >
          {r.tag}
        </span>
        <ArrowUpRight
          className="w-5 h-5 text-[#3a3a3a] group-hover:text-[#f5a623] transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </div>

      {/* Stats highlight */}
      <div className="mb-6">
        <div className="font-display leading-none mb-1" style={{ fontSize: large ? "5rem" : "3.5rem", color: r.accent }}>
          {r.stats.value}
        </div>
        <div className="font-condensed text-[#6b6b6b] text-sm tracking-widest uppercase">
          {r.stats.unit}
        </div>
      </div>

      {/* Info */}
      <div className="mt-auto">
        <h3 className="font-display text-2xl text-white mb-1 leading-tight">{r.project}</h3>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-3 h-3 text-[#f5a623]" />
          <span className="font-condensed text-sm text-[#6b6b6b] tracking-wide">{r.location}</span>
          <span className="text-[#3a3a3a]">·</span>
          <span className="font-condensed text-sm text-[#6b6b6b]">{r.client}</span>
        </div>
        <p className="text-[#5a5a5a] text-sm leading-relaxed font-light">{r.scope}</p>
      </div>

      {/* Bottom line */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out" style={{ backgroundColor: r.accent }} />
    </div>
  );
}