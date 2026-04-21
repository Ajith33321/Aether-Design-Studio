import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505] border-b border-white/10">
      <div className="w-full px-10 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter uppercase"
        >
          AETHER<span className="text-[#FF4D00]">.</span>STUDIO
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-white/50">
          {['Work', 'Services', 'Process', 'About'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-brand-accent hover:text-white transition-all"
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-[#050505] border-b border-white/10 flex flex-col p-6 gap-6 uppercase tracking-widest text-[11px] font-bold text-white/50"
        >
          {['Work', 'Services', 'Process', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="w-full py-4 bg-white text-black text-[10px] font-bold tracking-widest uppercase">
            Contact
          </button>
        </motion.div>
      )}
    </nav>
  );
}
