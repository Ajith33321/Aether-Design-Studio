import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505]">
      {/* Final CTA Block */}
      <div className="section-padding flex flex-col items-center text-center border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 max-w-2xl">
          Ready to create something <span className="text-[#FF4D00]">exceptional</span>?
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-white text-black font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-brand-accent hover:text-white transition-all shadow-2xl shadow-brand-accent/20"
        >
          Start Your Project
        </motion.button>
      </div>

      <div className="h-16 md:h-12 w-full px-10 flex flex-col md:flex-row justify-between items-center bg-[#050505] border-t border-white/10 text-[9px] uppercase tracking-[0.2em] text-white/30 gap-4">
        <div>&copy; 2026 AETHER STUDIO AGENCY</div>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
          <span className="hover:text-white cursor-pointer transition-colors">Behance</span>
          <span className="hover:text-white cursor-pointer transition-colors">Dribbble</span>
          <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
        </div>
        <div className="hidden md:block">New York &mdash; London &mdash; Tokyo</div>
      </div>
    </footer>
  );
}
