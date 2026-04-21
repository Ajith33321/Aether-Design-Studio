import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#050505] border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#FF4D00] opacity-5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 lg:pr-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-bold uppercase tracking-[0.3em] mb-12 text-white/40"
        >
          Studio Core Agency — New York / Tokyo
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-[84px] lg:text-[110px] font-bold tracking-tighter leading-[0.9] text-white mb-10 max-w-4xl"
        >
          Designing Digital <br />
          <span className="text-[#FF4D00]">Experiences</span> That Inspire
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-white/60 max-w-lg mb-12 font-light leading-relaxed"
        >
          We create intuitive, scalable, and visually stunning products for forward-thinking brands across the globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-10 py-5 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-all">
            View Our Work
          </button>
          <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:border-white transition-all">
            Start Project
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Scroll</span>
      </motion.div>
    </section>
  );
}
