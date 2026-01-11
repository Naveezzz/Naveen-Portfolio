import { motion } from 'framer-motion';
import { FadeIn } from './ScrollAnimations';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/50 to-transparent" />
      <div className="absolute inset-0 bg-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help build and automate your cloud infrastructure
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:naveen2n03@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl glass group"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="p-3 rounded-lg bg-teal/20 group-hover:bg-teal/30 transition-colors">
                      <Mail className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-mono">naveen2n03@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+917339688793"
                    className="flex items-center gap-4 p-4 rounded-xl glass group"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="p-3 rounded-lg bg-coral/20 group-hover:bg-coral/30 transition-colors">
                      <Phone className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-mono">+91 7339688793</p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl glass"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="p-3 rounded-lg bg-peach/20">
                      <MapPin className="w-5 h-5 text-peach" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-mono">Theni, Tamil Nadu, India</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/Naveezzz', label: 'GitHub', color: 'teal' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/naveen-j-n', label: 'LinkedIn', color: 'coral' },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl glass hover:bg-${color}/10 transition-colors`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={label}
                    >
                      <Icon className={`w-6 h-6 text-${color}`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <motion.input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <motion.input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <motion.textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
                    placeholder="Your message..."
                    rows={5}
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal text-cream-light font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px hsl(197 35% 37% / 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-cream-light border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
