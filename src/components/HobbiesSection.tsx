import { motion } from 'framer-motion';
import robotImage from '@/assets/robot.jpg';
import valorantImage from '@/assets/valorant-poster.jpg';
import tftImage from '@/assets/tft-character.jpg';
import childImage from '@/assets/child-beach.jpg';
import realWhiteCat from '@/assets/real-white-cat.jpg';

const hobbies = [
  {
    title: 'Robots',
    icon: '🤖',
    image: robotImage,
    description: 'Fascinated by robotics and AI technology',
    color: 'aurora-blue',
    bgGradient: 'from-aurora-blue/20 to-aurora-cyan/20'
  },
  {
    title: 'Cats',
    icon: '🐱',
    image: realWhiteCat,
    description: 'Cat lover and proud parent of three furry friends',
    color: 'aurora-purple',
    bgGradient: 'from-aurora-purple/20 to-aurora-pink/20'
  },
  {
    title: 'Children',
    icon: '👶',
    image: childImage,
    description: 'Enjoy spending time with kids and their creativity',
    color: 'aurora-green',
    bgGradient: 'from-aurora-green/20 to-aurora-cyan/20'
  },
  {
    title: 'Valorant',
    icon: '🎯',
    image: valorantImage,
    description: 'Tactical FPS gaming and strategic thinking',
    color: 'aurora-cyan',
    bgGradient: 'from-aurora-cyan/20 to-aurora-blue/20'
  },
  {
    title: 'TFT',
    icon: '♟️',
    image: tftImage,
    description: 'Teamfight Tactics - strategy and planning',
    color: 'aurora-pink',
    bgGradient: 'from-aurora-pink/20 to-aurora-purple/20'
  }
];

export default function HobbiesSection() {
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
            My Passions & Hobbies
          </h2>
          <p className="text-xl text-muted-foreground">
            Things that inspire and energize me outside of coding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-6 rounded-xl border border-white/10 bg-gradient-to-br ${hobby.bgGradient} group cursor-pointer relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl" />
              
              <div className="relative z-10">
                <div className="relative mb-4 overflow-hidden rounded-lg h-32">
                  <img 
                    src={hobby.image} 
                    alt={hobby.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-2 left-2 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {hobby.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hobby.description}
                </p>
                
                <div className="mt-4 flex justify-start">
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r from-${hobby.color} to-transparent group-hover:w-16 transition-all duration-300`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl border border-white/10 inline-block">
            <p className="text-lg text-muted-foreground mb-4">
              "Life is a balance of work, play, and furry companions"
            </p>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 bg-aurora-blue rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-aurora-purple rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
              <span className="w-2 h-2 bg-aurora-cyan rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}