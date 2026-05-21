"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#confiance" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "CFO / CFA",
  "Colonnes ENEDIS",
  "Chemins de câbles",
  "Tableaux électriques",
  "Appareillages",
  "Gestion de chantier",
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#060606] border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#accueil" className="flex items-center mb-6 group">
              <Image
                src="/images/shimi_logo.final.jpg"
                alt="Shimi Company — Électricité Générale"
                width={160}
                height={52}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-[#5a5a5a] text-sm leading-relaxed font-light mb-2 max-w-xs">
              Expert en construction électrique et BTP depuis 2024. Votre partenaire technique pour
              les projets résidentiels et tertiaires d'envergure.
            </p>
            <p className="text-[#3a3a3a] text-xs font-condensed tracking-wide mb-6">
              Réf. FR4401.930875315
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-3">
              {[ExternalLink, ExternalLink, ExternalLink].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center rounded-sm text-[#6b6b6b] hover:text-[#f5a623] hover:border-[#f5a623]/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-condensed text-white text-xs tracking-[0.25em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-condensed text-sm text-[#5a5a5a] hover:text-[#f5a623] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#f5a623]/0 group-hover:bg-[#f5a623]/60 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed text-white text-xs tracking-[0.25em] uppercase mb-6">
              Nos services
            </h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc}>
                  <span className="font-condensed text-sm text-[#5a5a5a] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#f5a623]/50" />
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed text-white text-xs tracking-[0.25em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:companyshimi@gmail.com?subject=Demande%20de%20devis%20-%20Shimi%20Company"
                  className="flex items-start gap-3 text-[#5a5a5a] hover:text-[#f5a623] transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-[#f5a623]/60 mt-0.5 flex-shrink-0" />
                  <span className="font-condensed text-sm">companyshimi@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33744153891"
                  className="flex items-start gap-3 text-[#5a5a5a] hover:text-[#f5a623] transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 text-[#f5a623]/60 mt-0.5 flex-shrink-0" />
                  <span className="font-condensed text-sm">07 44 15 38 91</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#5a5a5a]">
                  <MapPin className="w-4 h-4 text-[#f5a623]/60 mt-0.5 flex-shrink-0" />
                  <span className="font-condensed text-sm leading-relaxed">
                    14 rue de la Gironnière
                    <br />
                    44980 Sainte-Luce-sur-Loire
                    <br />
                    France
                  </span>
                </div>
              </li>
            </ul>

            <a
              href="mailto:companyshimi@gmail.com?subject=Demande%20de%20devis%20-%20Shimi%20Company"
              className="group inline-flex items-center gap-2 mt-8 px-6 py-3 border border-[#f5a623]/30 text-[#f5a623] font-condensed text-xs tracking-widest uppercase rounded-sm hover:bg-[#f5a623]/10 hover:border-[#f5a623]/60 transition-all duration-300"
            >
              Demander un devis
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-condensed text-[#3a3a3a] text-xs tracking-wide">
            © {new Date().getFullYear()} Shimi Company. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "CGV", "Politique de confidentialité"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-condensed text-[#3a3a3a] text-xs hover:text-[#f5a623] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}