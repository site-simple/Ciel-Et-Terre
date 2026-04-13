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
  color?: "sage" | "blue" | "earth";
}

const colorMap = {
  sage: {
    iconBg: "bg-sage/20 group-hover:bg-sage/30",
    iconText: "text-sage",
    link: "text-sage-dark group-hover:text-sage",
    border: "border-sage/20",
  },
  blue: {
    iconBg: "bg-dark-blue/15 group-hover:bg-dark-blue/25",
    iconText: "text-dark-blue",
    link: "text-dark-blue group-hover:text-dark-blue/70",
    border: "border-dark-blue/15",
  },
  earth: {
    iconBg: "bg-earth/15 group-hover:bg-earth/25",
    iconText: "text-earth",
    link: "text-earth group-hover:text-earth-light",
    border: "border-earth/15",
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
  color = "sage",
}: ServiceCardProps) {
  const c = colorMap[color];

  return (
    <ScrollReveal delay={delay}>
      <Link href={href} className="group block">
        <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md group-hover:-translate-y-1 active:scale-[0.98] transition-[transform,box-shadow] duration-[500ms] h-full border ${c.border}`}>
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-[400ms] ${c.iconBg}`}>
            <Icon size={28} className={c.iconText} />
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl mb-3 text-earth">
            {title}
          </h3>
          <p className="text-night/70 leading-relaxed text-sm">{description}</p>
          <span className={`inline-block mt-4 text-sm font-medium transition-colors duration-[400ms] ${c.link}`}>
            En savoir plus &rarr;
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
