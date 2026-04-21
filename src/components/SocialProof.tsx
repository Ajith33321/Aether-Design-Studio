import { motion } from 'motion/react';

const logos = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"];
const testimonials = [
  {
    quote: "Aether's eye for detail and commitment to user experience is unmatched. They transformed our product into something world-class.",
    author: "Elena Rossi",
    role: "CPD at FintechPro"
  },
  {
    quote: "The best design team we've ever worked with. Their process is transparent, and the results are consistently exceptional.",
    author: "Marcus Thorne",
    role: "CEO of Nova Systems"
  }
];

export default function SocialProof() {
  return (
    <section className="section-padding bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 bg-[#050505] flex flex-col justify-between"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 italic text-white/80">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-xs uppercase tracking-widest text-[#FF4D00]">{t.author}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2 font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
