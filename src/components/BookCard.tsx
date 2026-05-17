import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  coverUrl: string;
  buyUrl: string;
  price?: string;
  platform?: "Amazon Kindle" | "Google Play";
}

export function BookCard({ title, description, coverUrl, buyUrl, price, platform }: BookCardProps) {
  const [imgSrc, setImgSrc] = useState(coverUrl);
  const [hasError, setHasError] = useState(false);

  // Fallback to a high-quality placeholder if the user link fails
  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative glass-card overflow-hidden rounded-[2.5rem] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={imgSrc}
          alt={`Ebook cover for ${title} by Evelyn Reed`}
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Platform Badge */}
        {platform && (
          <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white">
            {platform}
          </div>
        )}

        {price && (
          <div className="absolute bottom-6 right-6 bg-brand-accent text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
            {price}
          </div>
        )}
      </div>

      <div className="p-10">
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-tighter leading-tight group-hover:text-brand-accent transition-colors duration-500 italic">
          {title}
        </h3>
        <p className="text-brand-primary/70 text-sm mb-10 line-clamp-3 leading-relaxed font-semibold">
          {description}
        </p>
        <a
          href={buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full py-6 px-8 bg-brand-primary text-brand-accent rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-brand-secondary transition-all duration-500 group/btn shadow-xl"
        >
          Acquire Ebook
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500 text-brand-accent" />
        </a>
      </div>
    </motion.div>
  );
}
