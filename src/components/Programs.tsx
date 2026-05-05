import { motion } from 'motion/react';
import { Home, Lightbulb, Activity, Church } from 'lucide-react';

const programs = [
  {
    icon: Home,
    title: 'Community Support',
    desc: 'Providing essential resources, food security, and shelter support to families in transition.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Lightbulb,
    title: 'Youth Empowerment',
    desc: 'Skills training, educational scholarships, and mentorship programs for the next generation.',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: Activity,
    title: 'Health & Social Services',
    desc: 'Mobile clinics, health awareness campaigns, and counseling for mental and social well-being.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Church,
    title: 'Faith-based Outreach',
    desc: 'Spiritual guidance and community gatherings that build unity through shared faith and values.',
    color: 'bg-purple-50 text-purple-600'
  }
];

export function Programs() {
  return (
    <section id="programs" className="bg-brand-cream">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <span className="text-brand-sage font-bold uppercase tracking-widest text-xs mb-4 block">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Our Core Initiatives</h2>
            <p className="text-gray-600 mt-4 text-lg">We take a holistic approach to community development, addressing physical, social, and spiritual needs.</p>
          </div>
          <a href="#involved" className="btn-secondary whitespace-nowrap">Explore All Services</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`${p.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <p.icon size={28} />
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {p.desc}
              </p>
              <div className="h-1 w-0 bg-brand-sage transition-all group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
