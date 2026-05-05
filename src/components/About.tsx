import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Acting with deep empathy and concern for others.' },
  { icon: ShieldCheck, title: 'Service', desc: 'Committed to serving the needy and vulnerable.' },
  { icon: Users, title: 'Unity', desc: 'Building strong communal bonds and partnerships.' },
  { icon: Globe, title: 'Empowerment', desc: 'Equipping individuals with tools for self-sufficiency.' },
];

import { Users, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
                alt="Community meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 bg-brand-sage text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-[240px]">
              <p className="text-3xl font-bold mb-1">15+</p>
              <p className="text-sm opacity-80 uppercase tracking-widest font-semibold">Years of Dedicated Service</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold text-brand-sage mb-6">About Ushirika wa Diakonia Faraja</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Founded on the principles of love and diakonia, our organization has been a beacon of hope in Tanzania for over a decade. We believe that true community progress is built on compassionate service and the empowerment of every individual.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-sky p-3 rounded-xl text-blue-600 h-fit">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-gray-600">To transform lives through spiritual guidance, social services, and economic empowerment programs that foster dignity and self-reliance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-sky p-3 rounded-xl text-blue-600 h-fit">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                  <p className="text-gray-600">A resilient and flourishing society where everyone is empowered to reach their full potential through the power of community and service.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-4 rounded-2xl border border-gray-100 hover:border-brand-sage/30 transition-colors group">
                  <v.icon size={20} className="text-brand-sage mb-3 transition-transform group-hover:scale-110" />
                  <h4 className="font-bold text-sm mb-1">{v.title}</h4>
                  <p className="text-xs text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section Placeholder */}
        <div className="mt-24 text-center">
          <h3 className="font-display text-3xl font-bold mb-12">Meet Our Leadership</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <img src={`https://i.pravatar.cc/300?u=team${i}`} alt="Team Member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">Team Member {i}</h4>
                  <p className="text-sm text-gray-500">Director / Coordinator</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
