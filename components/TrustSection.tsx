"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Award, Zap, CheckCircle, Shield, TrendingUp } from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    value: "35+",
    label: "Ans d'expérience",
    desc: "Plus de trois décennies sur les chantiers les plus exigeants d'Île-de-France et de province.",
    color: "#f5a623",
  },
  {
    icon: Award,
    value: "500+",
    label: "Grands projets réalisés",
    desc: "Tours, prisons, résidences, hôtels, hôpitaux — notre portfolio témoigne de notre capacité.",
    color: "#ff9500",
  },
  {
    icon: Zap,
    value: "Expert",
    label: "CFO / CFA",
    desc: "Courants forts et faibles, nous maîtrisons l'ensemble des installations électriques.",
    color: "#f5a623",
  },
  {
    icon: CheckCircle,
    value: "98%",
    label: "Livraison dans les délais",
    desc: "Notre organisation de chantier garantit le respect strict des plannings contractuels.",
    color: "#ff9500",
  },
  {
    icon: Shield,
    value: "ISO",
    label: "Qualité certifiée",
    desc: "Processus qualité rigoureux et conformité aux normes NF C 15-100 sur chaque opération.",
    color: "#f5a623",
  },
  {
    icon: TrendingUp,
    value: "12k+",
    label: "Logements électrifiés",
    desc: "Des milliers de foyers raccordés dans les règles de l'art à travers toute la France.",
    color: "#ff9500",
  },
];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="confiance" ref={ref} className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

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
              Pourquoi nous faire confiance
            </span>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl text-white max-w-2xl leading-none">
            35 ANS D'EXCELLENCE
            <br />
            <span className="text-[#f5a623]">TERRAIN</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-[#0d0d0d] p-8 hover:bg-[#141414] transition-colors duration-300 overflow-hidden"
              >
                {/* Hover accent line */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5a623] group-hover:w-full transition-all duration-500 ease-out" />

                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <div
                  className="font-display text-4xl mb-1 leading-none"
                  style={{ color: item.color }}
                >
                  {item.value}
                </div>
                <div className="font-condensed text-white text-base tracking-wide uppercase mb-3">
                  {item.label}
                </div>
                <p className="text-[#6b6b6b] text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}