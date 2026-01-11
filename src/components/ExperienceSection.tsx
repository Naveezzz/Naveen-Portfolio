import { motion } from 'framer-motion';
import { FadeIn } from './ScrollAnimations';
import { Building2, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Front-End Developer Intern',
    company: 'BayesVision',
    period: '2023 - 2024',
    description: 'Contributed to building and improving user-facing website experiences.',
    achievements: [
      'Delivered projects that enhanced website functionality and UI/UX under client supervision',
      'Collaborated with cross-functional teams to implement responsive designs',
      'Gained practical experience in modern frontend development practices',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey and practical experience
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

            {experiences.map((exp, index) => (
              <FadeIn key={exp.title} direction="right" delay={index * 0.2}>
                <motion.div
                  className="relative pl-0 md:pl-20 pb-12"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-teal border-4 border-background hidden md:block" />

                  <div className="p-6 rounded-xl glass group hover:shadow-elevated transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4 text-coral" />
                          <span className="text-coral font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Looking for Opportunities Card */}
          <FadeIn delay={0.4}>
            <motion.div
              className="mt-8 p-8 rounded-2xl border-2 border-dashed border-teal/30 text-center"
              whileHover={{ borderColor: 'hsl(var(--teal))' }}
            >
              <h3 className="text-2xl font-bold mb-2">Looking for New Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Seeking an entry-level AWS Cloud or DevOps Engineer role to apply my skills in real-world projects.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal text-cream-light font-medium"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px hsl(197 35% 37% / 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
