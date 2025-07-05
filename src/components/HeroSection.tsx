import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-6 text-aurora bg-gradient-to-r from-aurora-blue via-aurora-cyan to-aurora-purple bg-clip-text text-transparent animate-pulse">
            CIARA
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Multilingual Developer & Tech Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
        >
          <span className="glass-card px-4 py-2 rounded-full border border-aurora-blue/30">
            🗣️ English 80%
          </span>
          <span className="glass-card px-4 py-2 rounded-full border border-aurora-cyan/30">
            🗣️ Chinese 80%
          </span>
          <span className="glass-card px-4 py-2 rounded-full border border-aurora-purple/30">
            🗣️ Italian 20%
          </span>
          <span className="glass-card px-4 py-2 rounded-full border border-aurora-green/30">
            ☕ Java 20%
          </span>
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-aurora-blue rounded-full floating opacity-60"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-aurora-purple rounded-full floating-delayed opacity-40"></div>
      <div className="absolute bottom-32 left-40 w-5 h-5 bg-aurora-cyan rounded-full floating opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-aurora-green rounded-full floating-delayed opacity-70"></div>
    </section>
  );
}