"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Hammer, ShieldCheck, CheckSquare, Flag } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Étude",
    subtitle: "Analyse & conception",
    desc: "Étude technique complète, métrés, plans d'exécution, consultation des normes NF C 15-100 et cahier des charges.",
  },
  {
    step: "02",
    icon: Hammer,
    title: "Installation",
    subtitle: "Mise en œuvre terrain",
    desc: "Déploiement des équipes, pose des réseaux, câblage, appareillage — dans le respect du planning contractuel.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Mise en conformité",
    subtitle: "Contrôle & sécurité",
    desc: "Vérification des installations, tests de continuité, mise en conformité réglementaire et levée des réserves.",
  },
  {
    step: "04",
    icon: CheckSquare,
    title: "Validation",
    subtitle: "Réception technique",
    desc: "Réception contradictoire, procès-verbal de réception, remise des DOE et documentation technique complète.",
  },
  {
    step: "05",
    icon: Flag,
    title: "Livraison finale",
    subtitle: "Remise des clés",
    desc: "Livraison dans les délais, accompagnement à la mise en service, suivi post-livraison et garantie décennale.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#f5a623]" />
            <span className="font-condensed text-[#f5a623] text-sm tracking-[0.3em] uppercase">
              Notre méthode
            </span>
            <span className="w-8 h-px bg-[#f5a623]" />
          </div>
          <h2 className="font-display text-5xl lg:text-7xl text-white leading-none">
            PROCESSUS
            <br />
            <span className="text-[#f5a623]">D'INTERVENTION</span>
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#f5a623]/30 via-[#f5a623] to-[#f5a623]/30 origin-left"
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <div className="relative mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-[105px] h-[105px] rounded-sm flex items-center justify-center border border-[#f5a623]/30 bg-[#0f0f0f] group-hover:border-[#f5a623] group-hover:bg-[#f5a623]/10 transition-all duration-300 cursor-default"
                      style={{ boxShadow: "0 0 30px rgba(245,166,35,0)" }}
                    >
                      <Icon className="w-8 h-8 text-[#f5a623]" />
                    </motion.div>
                    {/* Step number */}
                    <span className="absolute -top-3 -right-3 font-display text-xs text-[#f5a623] bg-[#080808] border border-[#f5a623]/30 px-2 py-0.5 rounded-sm">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-white mb-1 group-hover:text-[#f5a623] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="font-condensed text-[#f5a623] text-xs tracking-widest uppercase mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-[#5a5a5a] text-xs leading-relaxed font-light">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-px bg-white/5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 bg-[#0d0d0d] p-6"
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 border border-[#f5a623]/30 bg-[#f5a623]/5 rounded-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <span className="font-display text-xs text-[#f5a623]">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-condensed text-white text-lg uppercase tracking-wide mb-1">
                    {step.title}
                  </h3>
                  <p className="font-condensed text-[#f5a623] text-xs tracking-widest uppercase mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}