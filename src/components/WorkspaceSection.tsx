import { motion } from 'framer-motion';
import tabbyCat from '@/assets/tabby-cat.jpg';
import goldenBlueCat from '@/assets/golden-blue-cat.jpg';
import whiteCat from '@/assets/white-cat.jpg';

const cats = [
  {
    name: 'Luna (Tabby)',
    image: tabbyCat,
    description: 'Gray tabby with emerald green eyes',
    color: 'aurora-green'
  },
  {
    name: 'Azure (Golden Blue)',
    image: goldenBlueCat,
    description: 'Golden-blue gray with amber eyes',
    color: 'aurora-cyan'
  },
  {
    name: 'Snow (Long-haired)',
    image: whiteCat,
    description: 'White fluffy cat with sapphire blue eyes',
    color: 'aurora-blue'
  }
];

export default function WorkspaceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aurora">
            My Workspace Companions
          </h2>
          <p className="text-xl text-muted-foreground">
            Meet my three adorable coding buddies who keep me company
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cats.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-6 rounded-xl border border-white/10 text-center group cursor-pointer"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${cat.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-primary">
                {cat.name}
              </h3>
              <p className="text-muted-foreground">
                {cat.description}
              </p>
              
              <div className="mt-4 flex justify-center">
                <div className={`w-2 h-2 rounded-full bg-${cat.color} animate-pulse`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground italic">
            "The perfect coding environment needs the perfect companions 🐱"
          </p>
        </motion.div>
      </div>
    </section>
  );
}