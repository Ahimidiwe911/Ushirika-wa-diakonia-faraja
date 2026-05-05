import { motion } from 'motion/react';

const posts = [
  {
    category: 'Success Story',
    title: 'How Moses Built His Sustainable Farm',
    date: 'May 12, 2024',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop'
  },
  {
    category: 'Announcement',
    title: 'New Community Center Opening in Dodoma',
    date: 'June 05, 2024',
    image: 'https://images.unsplash.com/photo-1540910419892-f0c762065b4f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    category: 'Feature',
    title: 'The Role of Technology in Rural Education',
    date: 'July 18, 2024',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop'
  }
];

export function News() {
  return (
    <section id="news" className="bg-brand-cream">
      <div className="section-padding">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl font-bold mb-4">Latest Updates</h2>
            <p className="text-gray-600">Stories of hope and progress from the field.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-brand-sage uppercase tracking-widest">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-sage transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  Discover how our initiatives are creating a ripple effect of positive change in local communities...
                </p>
                <span className="text-brand-sage font-semibold text-sm flex items-center gap-2">
                  Read More
                  <div className="w-4 h-0.5 bg-brand-sage group-hover:w-8 transition-all"></div>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
