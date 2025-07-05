import { motion } from 'framer-motion';
import hero3DSky from '@/assets/hero-3d-sky.jpg';

export default function Hero3DSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl glass-card border border-white/10">
              <img 
                src={hero3DSky} 
                alt="Ciara standing in 3D sky scene"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-aurora-blue/20" />
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-aurora-cyan rounded-full floating opacity-80"></div>
              <div className="absolute bottom-12 right-12 w-6 h-6 bg-aurora-purple rounded-full floating-delayed opacity-60"></div>
              <div className="absolute top-1/2 right-8 w-3 h-3 bg-aurora-green rounded-full floating opacity-70"></div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-aurora bg-gradient-to-r from-aurora-blue via-aurora-cyan to-aurora-purple bg-clip-text text-transparent">
                  Hello!
                </span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
                I'm Ciara
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Welcome to my digital universe! I'm a multilingual developer who loves creating beautiful experiences in the intersection of technology and creativity.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-4 rounded-xl border border-aurora-blue/30">
                <div className="text-2xl mb-2">🌟</div>
                <h3 className="font-bold text-primary mb-1">Developer</h3>
                <p className="text-sm text-muted-foreground">Creating digital magic</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-aurora-purple/30">
                <div className="text-2xl mb-2">🗣️</div>
                <h3 className="font-bold text-primary mb-1">Multilingual</h3>
                <p className="text-sm text-muted-foreground">Connecting cultures</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-aurora-cyan/30">
                <div className="text-2xl mb-2">🐱</div>
                <h3 className="font-bold text-primary mb-1">Cat Parent</h3>
                <p className="text-sm text-muted-foreground">Three furry companions</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-aurora-green/30">
                <div className="text-2xl mb-2">🎮</div>
                <h3 className="font-bold text-primary mb-1">Gamer</h3>
                <p className="text-sm text-muted-foreground">Strategic thinking</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center lg:text-left"
            >
              <p className="text-aurora font-medium italic">
                "Standing between earth and sky, creating digital dreams ✨"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-aurora-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-24 h-24 bg-aurora-cyan/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}