/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
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

  const kdpBooks: any[] = [
    {
      title: "The Silent Witness",
      description: "A gripping psychological thriller that explores the dark secrets hidden in plain sight. In a small town where everyone knows everyone, one person's silence is the most dangerous weapon of all.",
      coverUrl: "https://picsum.photos/seed/kdp_sw/600/800",
      buyUrl: "https://www.amazon.com/kdp",
      price: "$9.99",
      platform: "Amazon Kindle"
    },
    {
      title: "Midnight in Venice",
      description: "An evocative historical romance set against the backdrop of late 18th-century Venice. When a street musician crosses paths with a reclusive aristocrat, a series of events is set in motion that will change their lives forever.",
      coverUrl: "https://picsum.photos/seed/kdp_miv/600/800",
      buyUrl: "https://www.amazon.com/kdp",
      price: "$12.99",
      platform: "Amazon Kindle"
    }
  ];

  const gpBooks: any[] = [
    {
      title: "A Concise Textbook of Human Psychology",
      description: "A Concise Textbook of Human Psychology is a simple psychology guide covering behavior, emotions, memory, personality, and mental health for students and beginners.",
      coverUrl: "https://i.ibb.co/4DzcQy4/file-0000000086a0720884a100170fc70418.jpg",
      buyUrl: "https://openinapp.link/gtm3w",
      price: "New Release",
      platform: "Google Play"
    },
    {
      title: "The Space Between Heartbeats",
      description: "The Space Between Heartbeats is a slow-burn emotional romance about love, distance, and the quiet moments that change everything.",
      coverUrl: "https://i.ibb.co/9d4FD8N/1.png",
      buyUrl: "https://play.google.com/store/books/details?id=QL_TEQAAQBAJ",
      price: "Romance",
      platform: "Google Play"
    },
    {
      title: "FAST MONEY 2026",
      description: "💡 Want to earn money using AI in 2026? This beginner-friendly guide shows you simple, practical ways to start earning with AI.",
      coverUrl: "https://i.ibb.co/MDHCsdZ1/GGKEY-UBN5-LWX2-XK2-frontcover.jpg",
      buyUrl: "https://play.google.com/store/books/details?id=vSPMEQAAQBAJ",
      price: "Finance / AI",
      platform: "Google Play"
    },
    {
      title: "KAGE NO KAMI",
      description: "KAGE NO KAMI is a dark fantasy story about a teenage boy who discovers a mysterious power hidden within the shadows. As strange events begin to unfold around him, he learns about an ancient force known as the Shadow God. With danger rising and darkness spreading, he must decide whether to control the power… or be consumed by it.",
      coverUrl: "https://i.ibb.co/YFbyFb4q/GGKEY-5-W13-SCK5763-frontcover.jpg",
      buyUrl: "https://play.google.com/store/books/details?id=Y2jIEQAAQBAJ",
      price: "Dark Fantasy",
      platform: "Google Play"
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
    { name: "Collection", href: "#google-play" },
    { name: "Kindle Works", href: "#kdp" },
    { name: "About Author", href: "#about" },
    { name: "Connect", href: "#contact" }
  ];

  return (
    <div className="min-h-screen flex flex-col mesh-gradient">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Evelyn Reed's Digital Library",
          "description": "The complete collection of ebooks by author Evelyn Reed, including dark fantasy, romance, and psychological guides.",
          "author": {
            "@type": "Person",
            "name": "Evelyn Reed"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [...gpBooks, ...kdpBooks].map((book, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Book",
                "name": book.title,
                "description": book.description,
                "author": "Evelyn Reed",
                "image": book.coverUrl,
                "url": book.buyUrl,
                "publisher": {
                  "@type": "Organization",
                  "name": book.platform
                }
              }
            }))
          }
        })}
      </script>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/20">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-brand-accent transform hover:rotate-12 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-black tracking-tighter text-brand-primary">EVELYN REED</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-brand-primary text-brand-accent rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-accent/20">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-xl glass-card text-brand-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-black/5 px-6 py-10 z-50"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-4xl font-serif font-bold text-brand-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-black/5" />
              <button className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold uppercase tracking-widest text-sm">
                Join the Newsletter
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-brand-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] -right-[10%] w-[30vw] h-[30vw] bg-brand-secondary/5 rounded-full blur-[100px]" />
        </div>

        {/* Google Play Section - Bento Grid Style */}
        <section id="google-play" className="py-24 md:py-32 container max-w-7xl mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-1 bg-brand-accent" />
              <h2 className="font-serif text-6xl font-black tracking-tight text-brand-primary">
                GOOGLE PLAY <span className="italic font-light text-brand-muted">GLOBAL</span>
              </h2>
            </div>
            <p className="max-w-sm text-brand-muted text-lg font-light">
              Available in 75+ territories with seamless synchronization across Android, iOS, and Web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {gpBooks.map((book, idx) => (
              <div key={idx} className={idx % 3 === 0 ? "md:col-span-1" : ""}>
                 <BookCard {...book} />
              </div>
            ))}
          </div>
        </section>

        {/* KDP Section - Horizontal Scroll or Large Grid */}
        <section id="kdp" className="py-32 bg-brand-primary text-white relative overflow-hidden rounded-[5rem] mx-4 shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(229,201,164,0.05)_0%,transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-brand-accent font-black tracking-[0.4em] text-xs uppercase mb-6 block"
                >
                  Amazon Kindle Selection
                </motion.span>
                <h2 className="font-serif text-7xl md:text-9xl font-black leading-none mb-10 text-white italic">
                  THE <span className="text-brand-accent">AMAZON</span> <br/>
                  EXPERIENCE
                </h2>
                <p className="text-brand-muted text-xl font-light leading-relaxed">
                  Highly curated works optimized for the world's most popular reading devices. Immersive formatting and exclusive digital content.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {kdpBooks.map((book, idx) => (
                <BookCard key={idx} {...book} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 container max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Copies Sold", val: "2k" },
                { label: "Average Rating", val: "4.8/5" },
                { label: "Countries", val: "85+" },
                { label: "Top Charts", val: "#1" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-6xl font-serif font-black text-brand-primary mb-2 italic">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-muted">{stat.label}</div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Newsletter Section */}
        <section id="contact" className="py-48 bg-brand-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(229,201,164,0.05)_0%,transparent_50%)]" />
          
          <div className="max-w-4xl mx-auto px-10 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-brand-accent rounded-[2rem] flex items-center justify-center text-brand-primary mx-auto mb-12 shadow-[0_20px_50px_rgba(229,201,164,0.3)] transform rotate-12">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-7xl md:text-8xl font-black mb-10 tracking-tighter leading-none italic">
                THE <span className="text-brand-accent">INNER</span> <br/> CIRCLE
              </h2>
              <p className="text-xl md:text-2xl text-brand-muted mb-16 font-light leading-relaxed max-w-2xl mx-auto">
                Join our global fellowship of readers. Monthly manuscripts, character secrets, and digital gifts delivered to your sanctuary.
              </p>

              {isSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-brand-accent text-brand-primary p-12 rounded-[3rem] shadow-2xl"
                >
                  <h3 className="font-serif text-4xl font-black mb-4 italic">Welcome Home.</h3>
                  <p className="text-lg font-medium opacity-80 underline decoration-brand-primary/20">The first Chapter awaits in your inbox.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 p-3 bg-white/5 border border-white/10 rounded-[2.5rem] focus-within:border-brand-accent/50 transition-all shadow-2xl">
                  <input
                    type="email"
                    required
                    placeholder="Join the legacy (email)..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-10 py-6 rounded-[2rem] bg-transparent text-white placeholder:text-white/20 focus:outline-none text-xl font-light"
                  />
                  <button 
                    type="submit"
                    className="px-12 py-6 bg-brand-accent text-brand-primary font-black uppercase tracking-[0.3em] text-xs rounded-[2rem] hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand-accent/20"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-20 mb-32">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-brand-accent">
                   <BookOpen className="w-4 h-4" />
                </div>
                <span className="font-serif text-2xl font-black tracking-tighter">EVELYN REED</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-sm mb-10">
                Independent author dedicated to the craft of deep emotional storytelling and intellectual exploration.
              </p>
              <div className="flex items-center gap-4">
                {[Instagram, Youtube, Send].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-black/5 flex items-center justify-center rounded-xl text-gray-300 hover:text-brand-primary hover:border-brand-primary transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-bold mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-brand-primary text-sm font-medium transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold mb-8">Platforms</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-brand-primary text-sm font-medium transition-colors">Amazon Store</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-primary text-sm font-medium transition-colors">Kindle Unlimited</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-primary text-sm font-medium transition-colors">Google Play Books</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-primary text-sm font-medium transition-colors">Google Books API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-gray-300 text-xs font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Evelyn Reed Studio</span>
            <div className="flex gap-12">
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-brand-primary transition-colors">Legal Matrix</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-brand-primary transition-colors">Data Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
