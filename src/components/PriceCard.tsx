"use client";

import ScrollReveal from "./ScrollReveal";

interface PriceCardProps {
  title: string;
  price: string;
  delay?: number;
}

export default function PriceCard({ title, price, delay = 0 }: PriceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-md transition-[box-shadow] duration-[500ms] h-full flex flex-col justify-between">
        <h3 className="font-[family-name:var(--font-heading)] text-lg text-earth mb-4">
          {title}
        </h3>
        <p className="text-2xl font-medium text-sage-dark">{price}</p>
      </div>
    </ScrollReveal>
  );
}
