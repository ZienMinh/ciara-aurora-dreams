import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'English', level: 80, color: 'aurora-blue', icon: '🇬🇧' },
  { name: 'Chinese', level: 80, color: 'aurora-cyan', icon: '🇨🇳' },
  { name: 'Italian', level: 20, color: 'aurora-purple', icon: '🇮🇹' },
  { name: 'Java', level: 20, color: 'aurora-green', icon: '☕' },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aurora">
            Skills & Languages
          </h2>
          <p className="text-xl text-muted-foreground">
            My current proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <span className="text-lg font-bold text-primary">
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative">
                <Progress 
                  value={skill.level} 
                  className="h-3 bg-muted/50"
                />
                <div 
                  className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}