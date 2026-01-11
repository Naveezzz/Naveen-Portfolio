import { motion } from 'framer-motion';
import { FadeIn, ScaleOnScroll } from './ScrollAnimations';
import { ExternalLink, Github, Cloud, GitBranch, Database, Server } from 'lucide-react';

const projects = [
  {
    title: 'AWS Three Tier Web Architecture',
    description: '3-tier AWS architecture using Application Load Balancers and Auto Scaling Groups across availability zones. React frontend, Node.js backend API, and MySQL database with automated failover.',
    highlights: [
      'External ALB routes to Nginx-React servers in public subnets',
      'Internal ALB distributes to Node.js backends in private subnets',
      '70% cost reduction with Reserved Instances',
      'CloudWatch monitoring for optimization',
    ],
    tech: ['AWS', 'React', 'Node.js', 'MySQL', 'Nginx', 'ALB', 'Auto Scaling'],
    icon: Cloud,
    color: 'teal',
    github: 'https://github.com/Naveezzz/AWS-Three-Tier-Web-Architecture',
  },
  {
    title: 'Jenkins CI/CD Pipeline for Java Application',
    description: 'End-to-end Jenkins pipeline for Java applications using Docker containerization, Maven for build and testing, and GitHub webhooks for automated deployments.',
    highlights: [
      '40% reduction in deployment cycle time',
      'Automated test phases for code reliability',
      'GitHub webhooks for auto-triggering',
      'Complete CI/CD workflow documentation',
    ],
    tech: ['Jenkins', 'Docker', 'Maven', 'GitHub', 'Java'],
    icon: GitBranch,
    color: 'coral',
    github: 'https://github.com/Naveezzz/java-maven-app-jenkins',
  },
  {
    title: 'Two-Tier AWS with Terraform',
    description: 'Automated scalable provisioning of a two-tier web application stack on AWS using Terraform for infrastructure orchestration.',
    highlights: [
      'EC2, RDS, and S3 as remote backend',
      'VPC with private/public subnets',
      'Auto Scaling and security groups',
      'Route 53 for DNS routing',
    ],
    tech: ['Terraform', 'AWS EC2', 'RDS', 'S3', 'VPC', 'CloudWatch'],
    icon: Database,
    color: 'peach',
    github: 'https://github.com/Naveezzz/Deploy-A-2-tier-Application-On-AWS-Using-Terraform',
  },
  {
    title: 'Static Website Hosting on AWS',
    description: 'Amazon S3 bucket with static website hosting integrated with Amazon CloudFront as CDN for safe, fast worldwide content delivery with SSL.',
    highlights: [
      '40% faster website loads',
      'AWS Certificate Manager for SSL',
      'Optimized cache behavior',
      'Route 53 for custom domain DNS',
    ],
    tech: ['S3', 'CloudFront', 'Route 53', 'ACM', 'SSL'],
    icon: Server,
    color: 'cream',
    github: 'https://github.com/Naveezzz/Static-Website-Hosting-on-AWS',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/50 to-transparent" />
      <div className="absolute inset-0 bg-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world cloud infrastructure and DevOps automation projects
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
              <motion.div
                className="project-card rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Header */}
                <div className={`p-6 border-b border-border bg-${project.color}/5`}>
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-${project.color}/20`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <project.icon className={`w-6 h-6 text-${project.color}`} />
                    </motion.div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                      </motion.a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-sm font-mono text-coral mb-3">Key Achievements</h4>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
