import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-sage p-2 rounded-lg text-white">
                <Heart size={24} />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Faraja
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-8">
              Empowering communities in Tanzania through compassionate service and sustainable development initiatives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-sage transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-sage transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-sage transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-sage transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Our Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#involved" className="hover:text-white transition-colors">Donate Now</a></li>
              <li><a href="#involved" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#involved" className="hover:text-white transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparency Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Stay updated with our latest stories and impact reports.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex-1 outline-none focus:border-brand-sage" />
              <button className="bg-brand-sage text-white px-4 py-2 rounded-xl font-bold text-sm">Join</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ushirika wa Diakonia Faraja. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
