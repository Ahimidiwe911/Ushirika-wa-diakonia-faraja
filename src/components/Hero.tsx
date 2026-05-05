import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Children smiling and playing together"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:bg-gradient-to-r md:from-black/60 md:to-black/30"></div>
      </div>

      <div className="section-padding relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-gray-900 md:text-white"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-sage/20 md:bg-white/10 text-brand-sage md:text-white text-xs font-semibold uppercase tracking-wider mb-6">
            Establishing Hope Since 2010
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
            Empowering Communities Through <span className="text-brand-sage md:text-white/80 italic">Compassion</span> and Service
          </h1>
          <p className="text-lg md:text-xl text-gray-700 md:text-gray-200 mb-10 max-w-xl font-light">
            Ushirika wa Diakonia Faraja is dedicated to uplifting lives in Tanzania through youth empowerment, healthcare, and humanitarian support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#involved" className="btn-primary flex items-center justify-center gap-2 group">
              Get Involved
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn-secondary md:border-white md:text-white md:hover:bg-white md:hover:text-brand-sage flex items-center justify-center">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
