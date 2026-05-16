import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-3 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="font-serif text-3xl md:text-4xl font-bold"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        className="h-1 bg-brand-secondary mt-4 rounded-full"
      />
    </div>
  );
}
