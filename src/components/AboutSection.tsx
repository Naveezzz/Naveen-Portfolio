import { motion } from 'framer-motion';
import { FadeIn, Parallax } from './ScrollAnimations';
import { GraduationCap, Award, Target, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-teal/50" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-teal/50" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Terminal Card */}
          <FadeIn direction="left" delay={0.2}>
            <div className="terminal rounded-xl overflow-hidden shadow-elevated">
              <div className="terminal-header px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-coral" />
                <div className="w-3 h-3 rounded-full bg-peach" />
                <div className="w-3 h-3 rounded-full bg-teal" />
                <span className="ml-4 text-sm text-muted-foreground">about_naveen.sh</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground mb-2">
                  <span className="text-teal">$</span> cat about.txt
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-foreground mb-4">
                    Aspiring <span className="text-coral">AWS & DevOps Engineer</span> and 2025 
                    B.Tech Information Technology graduate with practical experience in building 
                    cloud infrastructure and CI/CD pipelines.
                  </p>
                  <p className="text-foreground mb-4">
                    Proficient in deploying and managing scalable applications on 
                    <span className="text-teal-light"> AWS (EC2, S3, RDS, VPC, Route 53, CloudFront)</span> 
                    with a focus on security and performance.
                  </p>
                  <p className="text-foreground">
                    Actively preparing for <span className="text-peach">AWS certification</span> and 
                    seeking an entry-level role to apply cloud and DevOps skills in real-world projects.
                  </p>
                </motion.div>
                <p className="text-muted-foreground mt-4">
                  <span className="text-teal">$</span> <span className="border-r-2 border-coral animate-pulse">_</span>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Info Cards */}
          <div className="space-y-6">
            <FadeIn direction="right" delay={0.3}>
              <motion.div
                className="p-6 rounded-xl glass group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-teal/20 group-hover:bg-teal/30 transition-colors">
                    <GraduationCap className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Education</h3>
                    <p className="text-muted-foreground">B.Tech Information Technology</p>
                    <p className="text-sm text-coral">Kongunadu College of Engineering • 2021-2025</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <motion.div
                className="p-6 rounded-xl glass group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-coral/20 group-hover:bg-coral/30 transition-colors">
                    <Award className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Certifications</h3>
                    <p className="text-muted-foreground">Cloud & DevOps Training - FITA Academy</p>
                    <p className="text-sm text-teal-light">AWS Certified Cloud Practitioner (Expected 2025)</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="right" delay={0.5}>
              <motion.div
                className="p-6 rounded-xl glass group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-peach/20 group-hover:bg-peach/30 transition-colors">
                    <Target className="w-6 h-6 text-peach" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Career Goals</h3>
                    <p className="text-muted-foreground">AWS Cloud Engineer • DevOps Engineer</p>
                    <p className="text-sm text-muted-foreground">Cloud Administrator • Infrastructure Automation</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="right" delay={0.6}>
              <motion.div
                className="p-6 rounded-xl glass group cursor-pointer"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cream/10 group-hover:bg-cream/20 transition-colors">
                    <Sparkles className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Languages</h3>
                    <p className="text-muted-foreground">Tamil • English • Hindi</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
