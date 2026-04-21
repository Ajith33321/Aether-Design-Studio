import { motion } from 'motion/react';

const steps = [
  { step: "01", name: "Discover", desc: "Understanding goals & challenges" },
  { step: "02", name: "Research", desc: "User insights & market analysis" },
  { step: "03", name: "Wireframe", desc: "Mapping journeys & architecture" },
  { step: "04", name: "Design", desc: "Refining visual & interactivity" },
  { step: "05", name: "Iterate", desc: "Testing, learning & improving" }
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-[#080808] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-16">Our Design Process</h4>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-1 items-start gap-6 group">
              <div className="flex flex-col">
                <span className={`text-4xl font-bold mb-2 transition-colors duration-300 ${item.name === 'Design' ? 'text-[#FF4D00]' : 'text-white'}`}>
                  {item.step}
                </span>
                <span className={`text-[10px] uppercase font-bold tracking-widest ${item.name === 'Design' ? 'text-[#FF4D00]' : 'text-white/60'}`}>
                  {item.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block h-px w-full bg-white/10 mt-6" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-16">
          <div className="flex gap-12 opacity-30 grayscale contrast-125 hover:opacity-100 transition-opacity duration-500">
            <span className="text-xl font-black tracking-widest italic">FORBES</span>
            <span className="text-xl font-black tracking-widest italic">STRIPE</span>
            <span className="text-xl font-black tracking-widest italic">APPLE</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold">Let’s Create Something Exceptional</p>
            <a href="#" className="text-base font-bold border-b-2 border-[#FF4D00] pb-1 hover:text-[#FF4D00] transition-colors">Start Your Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
