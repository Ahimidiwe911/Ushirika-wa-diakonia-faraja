import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '5,000+', label: 'People Helped' },
  { value: '25+', label: 'Communities Reached' },
  { value: '12', label: 'Years of Impact' },
  { value: '150+', label: 'Volunteers' }
];

const projects = [
  {
    title: 'The Clean Water Initiative',
    location: 'Arusha Region',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2044&auto=format&fit=crop'
  },
  {
    title: 'Youth Digital Skills Lab',
    location: 'Dar es Salaam',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Maternal Health Clinic Support',
    location: 'Dodoma',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop'
  }
];

export function Impact() {
  return (
    <section id="impact" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold mb-6">Our Impact in Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tangible results that reflect our commitment to positive change across the region.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-brand-sage mb-2">{s.value}</p>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Ongoing Projects</h3>
          <p className="text-gray-500">A showcase of our current work in the field.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-video cursor-pointer shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-brand-sage font-bold text-xs uppercase mb-2 tracking-widest flex items-center gap-1">
                   <CheckCircle2 size={14} /> {project.location}
                </span>
                <h4 className="text-white font-bold text-xl">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
