"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Home, Building2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    city: "Étampes",
    department: "91",
    count: 180,
    unit: "logements",
    client: "Nexity",
    type: "Résidentiel",
    description: "Programme résidentiel complet — CFO/CFA, colonnes ENEDIS, appareillages.",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    city: "Vernouillet",
    department: "28",
    count: 124,
    unit: "logements",
    client: "Kaufman & Broad",
    type: "Résidentiel premium",
    description: "Résidence haut de gamme, installation complète courants forts et faibles.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    city: "Les Herbiers",
    department: "85",
    count: 96,
    unit: "logements",
    client: "Promoteur régional",
    type: "Résidentiel",
    description: "Opération neuve en Vendée, livraison dans les délais garantie.",
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80",
  },
  {
    city: "Angers",
    department: "49",
    count: 210,
    unit: "logements",
    client: "Nexity",
    type: "Grand ensemble",
    description: "Grand ensemble résidentiel, coordination multi-bâtiments sur 18 mois.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
  },
  {
    city: "La Roche-sur-Yon",
    department: "85",
    count: 148,
    unit: "chambres",
    client: "Groupe hôtelier",
    type: "Hôtellerie",
    description: "Hôtel 3 étoiles — installation CFA, domotique, systèmes de sécurité incendie.",
    img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projets" ref={ref} className="relative py-28 overflow-hidden bg-[#060606]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
              Projets récents
            </span>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl text-white leading-none">
            NOS CHANTIERS
            <br />
            <span className="text-[#f5a623]">EN FRANCE</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden cursor-pointer ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
                <div className="absolute inset-0 bg-[#f5a623]/0 group-hover:bg-[#f5a623]/10 transition-colors duration-500" />

                {/* Department badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-display text-4xl text-white/20 group-hover:text-[#f5a623]/30 transition-colors duration-300">
                    {project.department}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="w-5 h-5 text-white/0 group-hover:text-[#f5a623] transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#0d0d0d] group-hover:bg-[#111] transition-colors duration-300 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-3xl text-white leading-none mb-1 group-hover:text-[#f5a623] transition-colors duration-200">
                      {project.city}
                    </h3>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[#f5a623]" />
                      <span className="font-condensed text-xs text-[#6b6b6b] tracking-wide uppercase">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl text-[#f5a623] leading-none">
                      {project.count}
                    </div>
                    <div className="font-condensed text-xs text-[#6b6b6b] tracking-wide">
                      {project.unit}
                    </div>
                  </div>
                </div>

                <p className="text-[#5a5a5a] text-xs leading-relaxed font-light mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2">
                  <Building2 className="w-3 h-3 text-[#f5a623]/60" />
                  <span className="font-condensed text-xs text-[#4a4a4a] tracking-wide">
                    {project.client}
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f5a623] group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}