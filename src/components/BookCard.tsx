import { useState } from "react";
import { motion } from "motion/react";

interface BookCardProps {
  title: string;
  description: string;
  coverUrl: string;
  buyUrl: string;
  price?: string;
}

export function BookCard({ title, description, coverUrl, buyUrl, price }: BookCardProps) {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-black/5 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4 relative">
        <img
          src={imgSrc}
          alt={title}
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {price && (
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold shadow-sm">
            {price}
          </div>
        )}
      </div>
      <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-brand-secondary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>
      <a
        href={buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-secondary transition-colors"
      >
        Buy Now
      </a>
    </motion.div>
  );
}
