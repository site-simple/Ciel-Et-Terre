"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <Link href={href} className="group block">
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 h-full">
          <div className="w-14 h-14 rounded-xl bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-200">
            <Icon size={28} className="text-sage" />
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl mb-3 text-earth">
            {title}
          </h3>
          <p className="text-night/60 leading-relaxed text-sm">{description}</p>
          <span className="inline-block mt-4 text-sage-dark text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
            En savoir plus &rarr;
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
