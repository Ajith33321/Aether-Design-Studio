import { motion } from 'motion/react';
import { Layout, Search, PenTool, Layers, Boxes } from 'lucide-react';

const services = [
  {
    title: "UI Design",
    description: "Crafting visually stunning interfaces that align with your brand identity and delight users.",
    icon: Layout
  },
  {
    title: "UX Strategy",
    description: "In-depth research and strategic planning to ensure every interaction serves a purpose.",
    icon: Search
  },
  {
    title: "Product Design",
    description: "End-to-end product development from initial concept to market-ready solution.",
    icon: Boxes
  },
  {
    title: "Design Systems",
    description: "Scaling your product with robust, consistent, and documented design patterns.",
    icon: Layers
  },
  {
    title: "Branding",
    description: "Developing cohesive visual identities that resonate with your target audience.",
    icon: PenTool
  }
];

export default function Services() {
  return (
    <section id="services" className="grid lg:grid-cols-12 bg-black text-white">
      <div className="lg:col-span-12 section-padding border-b border-white/10 flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="max-w-2xl">
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Studio Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-default">
                <div className="w-1.5 h-1.5 bg-[#FF4D00] group-hover:scale-150 transition-transform duration-300" />
                <span className="text-base md:text-lg font-medium">{service.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 lg:pt-0 lg:max-w-xs border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12">
          <p className="text-2xl font-light italic text-white/80 leading-snug">
            "We believe great design is <span className="text-white font-normal underline decoration-[#FF4D00] underline-offset-8">invisible</span>."
          </p>
        </div>
      </div>
    </section>
  );
}
