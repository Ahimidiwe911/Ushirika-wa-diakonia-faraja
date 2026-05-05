import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Have questions about our programs or want to learn how you can support us? Reach out today—our team would love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-sky p-4 rounded-2xl text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Main Office</h4>
                  <p className="text-gray-500">P.O. Box 1234, Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-sky p-4 rounded-2xl text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-gray-500">info@diakoniafaraja.org</p>
                  <p className="text-gray-500">volunteers@diakoniafaraja.org</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-sky p-4 rounded-2xl text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-gray-500">+255 (0) 123 456 789</p>
                  <p className="text-gray-500">Mon - Fri, 9am - 5pm</p>
                </div>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-100 rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white px-6 py-3 rounded-full shadow-lg font-bold flex items-center gap-2">
                    <MapPin size={18} className="text-red-500" />
                    Visit our HQ
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 md:p-14 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <input type="text" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-brand-sage transition-all outline-none h-40"></textarea>
              </div>
              <button className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
