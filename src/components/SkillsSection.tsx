import { motion } from 'framer-motion';
import { FadeIn } from './ScrollAnimations';
import { Cloud, Container, GitBranch, Server, Terminal, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Services',
    icon: Cloud,
    color: 'teal',
    skills: ['AWS EC2', 'S3', 'RDS', 'Route 53', 'CloudFront', 'VPC', 'IAM', 'CloudWatch'],
  },
  {
    title: 'Infrastructure as Code',
    icon: Settings,
    color: 'coral',
    skills: ['Terraform', 'AWS CloudFormation', 'Infrastructure Automation'],
  },
  {
    title: 'CI/CD & DevOps',
    icon: GitBranch,
    color: 'peach',
    skills: ['Jenkins Pipeline', 'GitHub Actions', 'Maven', 'Git'],
  },
  {
    title: 'Containerization',
    icon: Container,
    color: 'cream',
    skills: ['Docker', 'Container Orchestration', 'Microservices'],
  },
  {
    title: 'Servers & Runtime',
    icon: Server,
    color: 'teal',
    skills: ['Nginx', 'Tomcat', 'PM2', 'Node.js'],
  },
  {
    title: 'Scripting & OS',
    icon: Terminal,
    color: 'coral',
    skills: ['Python', 'Bash', 'Ubuntu Linux', 'Windows Server'],
  },
];

const softSkills = ['Communication', 'Time Management', 'Team Work', 'Adaptability', 'Problem Solving'];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Technical Arsenal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building robust cloud infrastructure with modern DevOps practices
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} direction="up" delay={index * 0.1}>
              <motion.div
                className="p-6 rounded-xl glass group"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: `0 20px 40px hsl(var(--${category.color}) / 0.2)` 
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-${category.color}/20`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Animated Skills Bar */}
        <FadeIn delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
            <div className="space-y-6">
              {[
                { name: 'AWS Cloud Services', level: 85, color: 'teal' },
                { name: 'Terraform & IaC', level: 80, color: 'coral' },
                { name: 'CI/CD Pipelines', level: 75, color: 'peach' },
                { name: 'Docker & Containers', level: 70, color: 'cream' },
                { name: 'Linux Administration', level: 80, color: 'teal' },
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Soft Skills */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 rounded-full border border-coral/30 text-coral hover:bg-coral/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
