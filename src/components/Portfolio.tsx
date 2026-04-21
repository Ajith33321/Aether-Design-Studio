import { motion } from 'motion/react';

const projects = [
  {
    title: "Lumina Dashboard",
    category: "Dashboard / SaaS",
    image: "https://picsum.photos/seed/dashboard/1200/800",
    color: "#e0f2fe"
  },
  {
    title: "Verve Mobile App",
    category: "Web / Mobile",
    image: "https://picsum.photos/seed/mobile/1200/800",
    color: "#fef2f2"
  },
  {
    title: "Nova Fintech",
    category: "Banking / App",
    image: "https://picsum.photos/seed/fintech/1200/800",
    color: "#f0fdf4"
  },
  {
    title: "Aura Creative",
    category: "Branding / Web",
    image: "https://picsum.photos/seed/creative/1200/800",
    color: "#faf5ff"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-[#050505]">
      <div className="grid md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative h-[600px] border-b border-white/10 even:border-l border-white/10 overflow-hidden cursor-pointer"
          >
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 z-0">
              <img 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="absolute bottom-12 left-12 z-20 transition-transform group-hover:translate-x-4 duration-500">
              <div className="text-[10px] text-[#FF4D00] uppercase tracking-[0.3em] mb-2 font-bold">
                Case Study — {project.category.split(' / ')[0]}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{project.title}</h3>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore Project ↗
              </p>
            </div>

            <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20 p-4">
               <span className="text-xs font-bold uppercase tracking-widest">Detail</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
