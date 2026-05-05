import { motion } from 'motion/react';
import { Heart, Users, Handshake, CreditCard } from 'lucide-react';
import { useState } from 'react';

export function Involved() {
  const [formStep, setFormStep] = useState(1);

  return (
    <section id="involved" className="bg-brand-sage py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            Make a Difference
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready to Join Our Mission?</h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed">
            Whether you donate your time, expertise, or financial resources, your contribution directly empowers communities in Tanzania. Together, we can create lasting change.
          </p>

          <div className="grid gap-8">
            <div className="flex gap-6 items-start">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Volunteer with Us</h3>
                <p className="text-white/60">Apply your skills on the ground or remotely to support our programs.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Handshake className="text-white" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Partner with Us</h3>
                <p className="text-white/60">Organizations and churches collaborate with us for wider impact.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative"
          >
            {/* Donation UI */}
            <div className="flex bg-gray-100 p-1 rounded-2xl mb-8">
              <button 
                onClick={() => setFormStep(1)}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${formStep === 1 ? 'bg-white shadow-sm text-brand-sage' : 'text-gray-500'}`}
              >
                Donate
              </button>
              <button 
                onClick={() => setFormStep(2)}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${formStep === 2 ? 'bg-white shadow-sm text-brand-sage' : 'text-gray-500'}`}
              >
                Volunteer
              </button>
            </div>

            {formStep === 1 ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Select Amount ($)</label>
                  <div className="grid grid-cols-4 gap-3">
                    {['10', '25', '50', '100'].map((amt) => (
                      <button key={amt} className="py-3 border-2 border-gray-100 rounded-xl hover:border-brand-sage hover:bg-brand-sage/5 font-bold transition-all">
                        {amt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <input type="number" placeholder="Custom Amount" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none" />
                </div>
                <button className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3">
                  <CreditCard size={20} />
                  Proceed to Secure Payment
                </button>
                <p className="text-center text-xs text-gray-400">Placeholder payment integration. Secure encryption enabled.</p>
              </div>
            ) : (
              <form className="space-y-4">
                 <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none" />
                 <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none" />
                 <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none text-gray-500">
                   <option>Select Area of Interest</option>
                   <option>Community Support</option>
                   <option>Youth Mentoring</option>
                   <option>Medical Support</option>
                 </select>
                 <textarea placeholder="Tell us about yourself..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none h-32"></textarea>
                 <button type="submit" className="w-full btn-primary py-5 text-lg">Send Application</button>
              </form>
            )}

            <div className="absolute -top-6 -left-6 bg-brand-cream text-brand-sage p-4 rounded-2xl shadow-lg transform -rotate-12 hidden md:block">
              <Heart fill="currentColor" size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
