"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock3, HardHat, Layers, Users2, BarChart3 } from "lucide-react";

const differentiators = [
  {
    icon: Clock3,
    title: "Respect des délais",
    desc: "Notre culture d'entreprise place le respect du planning au cœur de chaque chantier. 98% de nos livraisons sont réalisées à temps.",
    metric: "98%",
    metricLabel: "de livraisons dans les délais",
  },
  {
    icon: HardHat,
    title: "Expertise terrain",
    desc: "Nos équipes sont composées de techniciens confirmés, formés aux dernières normes et technologies électriques du bâtiment.",
    metric: "35+",
    metricLabel: "ans sur le terrain",
  },
  {
    icon: Layers,
    title: "Interventions structurées",
    desc: "Chaque intervention suit un protocole rigoureux : étude préalable, planification, exécution contrôlée, réception documentée.",
    metric: "ISO",
    metricLabel: "processus certifiés",
  },
  {
    icon: Users2,
    title: "Équipe expérimentée",
    desc: "Plus de 50 collaborateurs permanents, chefs de chantier diplômés et équipes spécialisées par corps de métier.",
    metric: "50+",
    metricLabel: "collaborateurs",
  },
  {
    icon: BarChart3,
    title: "Suivi chantier rigoureux",
    desc: "Reporting hebdomadaire, réunions de chantier, tableaux de bord — la transparence totale envers nos maîtres d'ouvrage.",
    metric: "100%",
    metricLabel: "transparence chantier",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-[#060606]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Background decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-l from-[#f5a623]/20 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#f5a623]" />
              <span className="font-condensed text-[#f5a623] text-sm tracking-[0.3em] uppercase">
                Notre différence
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-white leading-none mb-8">
              POURQUOI
              <br />
              CHOISIR
              <br />
              <span className="text-[#f5a623]">SHIMI ?</span>
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed max-w-md font-light">
              Shimi Company n'est pas un simple sous-traitant électrique. Nous sommes un partenaire
              technique qui s'engage sur les résultats et accompagne chaque maître d'ouvrage de la
              conception à la livraison.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between py-2">
                <span className="font-condensed text-[#6b6b6b] text-sm tracking-wide">Fondée en</span>
                <span className="font-display text-2xl text-white">2024</span>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between py-2">
                <span className="font-condensed text-[#6b6b6b] text-sm tracking-wide">Siège social</span>
                <span className="font-condensed text-white text-sm">Nantes/Pays de la Loire</span>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between py-2">
                <span className="font-condensed text-[#6b6b6b] text-sm tracking-wide">Zones d'intervention</span>
                <span className="font-condensed text-white text-sm">France entière</span>
              </div>
              <div className="h-px w-full bg-white/5" />
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-px bg-white/5">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="group relative bg-[#0d0d0d] p-7 hover:bg-[#111] transition-colors duration-300 overflow-hidden"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 border border-[#f5a623]/20 bg-[#f5a623]/5 rounded-sm flex items-center justify-center group-hover:border-[#f5a623]/50 transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#f5a623]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-condensed text-white text-base uppercase tracking-wide group-hover:text-[#f5a623] transition-colors duration-200">
                          {item.title}
                        </h3>
                        <div className="text-right ml-4 flex-shrink-0">
                          <div className="font-display text-2xl text-[#f5a623] leading-none">
                            {item.metric}
                          </div>
                          <div className="font-condensed text-[10px] text-[#4a4a4a] tracking-wide max-w-[100px] text-right">
                            {item.metricLabel}
                          </div>
                        </div>
                      </div>
                      <p className="text-[#5a5a5a] text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f5a623] group-hover:w-full transition-all duration-500 ease-out" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}