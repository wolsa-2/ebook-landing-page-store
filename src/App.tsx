/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { BookCard } from "./components/BookCard";
import { SectionHeader } from "./components/SectionHeader";
import { 
  Instagram, 
  Youtube, 
  Send, 
  ArrowRight, 
  BookOpen, 
  ShoppingBag,
  Mail,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const kdpBooks = [
    {
      title: "The Silent Witness",
      description: "A gripping psychological thriller that explores the dark secrets hidden in plain sight. In a small town where everyone knows everyone, one person's silence is the most dangerous weapon of all.",
      coverUrl: "https://picsum.photos/seed/kdp_sw/600/800",
      buyUrl: "https://www.amazon.com/kdp",
      price: "$9.99"
    },
    {
      title: "Midnight in Venice",
      description: "An evocative historical romance set against the backdrop of late 18th-century Venice. When a street musician crosses paths with a reclusive aristocrat, a series of events is set in motion that will change their lives forever.",
      coverUrl: "https://picsum.photos/seed/kdp_miv/600/800",
      buyUrl: "https://www.amazon.com/kdp",
      price: "$12.99"
    }
  ];

  const gpBooks = [
    {
      title: "A Concise Textbook of Human Psychology",
      description: "A Concise Textbook of Human Psychology is a simple psychology guide covering behavior, emotions, memory, personality, and mental health for students and beginners.",
      coverUrl: "https://i.ibb.co/4DzcQy4/file-0000000086a0720884a100170fc70418.jpg",
      buyUrl: "https://openinapp.link/gtm3w",
      price: "New Release"
    },
    {
      title: "The Space Between Heartbeats",
      description: "The Space Between Heartbeats is a slow-burn emotional romance about love, distance, and the quiet moments that change everything.",
      coverUrl: "https://i.ibb.co/9d4FD8N/1.png",
      buyUrl: "https://play.google.com/store/books/details?id=QL_TEQAAQBAJ",
      price: "Romance"
    },
    {
      title: "FAST MONEY 2026",
      description: "💡 Want to earn money using AI in 2026? This beginner-friendly guide shows you simple, practical ways to start earning with AI.",
      coverUrl: "https://i.ibb.co/MDHCsdZ1/GGKEY-UBN5-LWX2-XK2-frontcover.jpg",
      buyUrl: "https://play.google.com/store/books/details?id=vSPMEQAAQBAJ",
      price: "Finance / AI"
    },
    {
      title: "KAGE NO KAMI",
      description: "KAGE NO KAMI is a dark fantasy story about a teenage boy who discovers a mysterious power hidden within the shadows. As strange events begin to unfold around him, he learns about an ancient force known as the Shadow God. With danger rising and darkness spreading, he must decide whether to control the power… or be consumed by it.",
      coverUrl: "https://i.ibb.co/YFbyFb4q/GGKEY-5-W13-SCK5763-frontcover.jpg",
      buyUrl: "https://play.google.com/store/books/details?id=Y2jIEQAAQBAJ",
      price: "Dark Fantasy"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "KDP Works", href: "#kdp" },
    { name: "Google Play", href: "#google-play" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-brand-secondary" />
            <span className="font-serif text-xl font-bold tracking-tight">Evelyn Reed</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-secondary transition-colors">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-black/5 px-4 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 bg-brand-primary text-white rounded-xl font-medium">
                Subscribe to Newsletter
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32 container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
                Published Author & Storyteller
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                Evelyn Reed
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Crafting immersive worlds and unforgettable characters. Explore my latest collection of ebooks across all major platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#kdp" 
                  className="px-8 py-4 bg-brand-primary text-white rounded-xl font-medium flex items-center gap-2 hover:bg-brand-secondary transition-all"
                >
                  Explore Books <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-4 px-6 md:px-8">
                  <a href="#" className="p-2 text-gray-600 hover:text-brand-secondary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-2 text-gray-600 hover:text-brand-secondary transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-2 text-gray-600 hover:text-brand-secondary transition-colors">
                    <Send className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/author_ev/800/800" 
                  alt="Evelyn Reed" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-accent rounded-3xl z-0" />
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-24 bg-brand-accent/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* KDP Section */}
        <section id="kdp" className="py-24 bg-brand-primary/[0.02] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader 
              title="Kindle Direct Publishing" 
              subtitle="Amazon Exclusives" 
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
              {kdpBooks.map((book, idx) => (
                <BookCard key={idx} {...book} />
              ))}
            </div>
          </div>
        </section>

        {/* Google Play Section */}
        <section id="google-play" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-end">
              <SectionHeader 
                title="Google Play Books" 
                subtitle="Global Availability" 
                centered={false}
              />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl ml-auto">
              {gpBooks.map((book, idx) => (
                <BookCard key={idx} {...book} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="contact" className="py-24 bg-brand-primary text-white rounded-t-[3rem] md:rounded-t-[5rem]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Join the Inner Circle</h2>
              <p className="text-gray-400 mb-10 text-lg">
                Get exclusive sneak peeks, early release dates, and monthly writing tips delivered straight to your inbox.
              </p>

              {isSubscribed ? (
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="bg-brand-secondary/20 border border-brand-secondary p-6 rounded-2xl"
                >
                  <p className="text-xl font-serif">Welcome aboard! Check your inbox soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-brand-accent text-brand-primary font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    Subscribe <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              )}
              <p className="mt-6 text-xs text-gray-500">
                I respect your privacy. No spam, ever. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-brand-accent" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold leading-none">Evelyn Reed</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">Author Portfolio</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-brand-accent transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Youtube /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Send /></a>
              <a href="https://wa.me/something" className="hover:text-brand-accent transition-colors"><ShoppingBag /></a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Evelyn Reed. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="underline decoration-transparent hover:decoration-brand-accent transition-all">Privacy Policy</a>
              <a href="#" className="underline decoration-transparent hover:decoration-brand-accent transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
